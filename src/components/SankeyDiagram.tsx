import React, { useEffect, useRef } from 'react';
import Plotly from 'plotly.js-dist-min';
import { Config, Scenario } from '../types';
import { buildSankeyData, computeAlignedX, resolveNodeColor, interpolateRgb } from '../lib/sankeyUtils';

interface SankeyDiagramProps {
  scenario: Scenario;
  config: Config;
  onNodeDrag?: (positions: Record<string, { x: number; y: number }>) => void;
  animating: boolean;
  animSpeed: number;
}

export const SankeyDiagram: React.FC<SankeyDiagramProps> = ({
  scenario,
  config,
  onNodeDrag,
  animating,
  animSpeed,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const plotRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const { labels, src, tgt, val, linkColors } = buildSankeyData(scenario.flows, config);

    if (!labels.length) {
      if (plotRef.current) Plotly.purge(containerRef.current);
      return;
    }

    const nodeIn = new Array(labels.length).fill(0);
    const nodeOut = new Array(labels.length).fill(0);
    for (let i = 0; i < src.length; i++) {
      nodeOut[src[i]] += val[i];
      nodeIn[tgt[i]] += val[i];
    }

    const displayLabels = labels.map((l, i) => {
      const total = Math.round(Math.max(nodeIn[i], nodeOut[i]));
      return `${l}<br>${total.toLocaleString('en').replace(/,/g, '\u2009')} ${config.valueUnit}`;
    });

    const resolvedDefault = resolveNodeColor(config.defaultNodeColor, '#808080');
    const nodeColors = labels.map(l => {
      const raw = scenario.nodeColorOverrides[l];
      return (raw !== undefined && raw !== '') ? resolveNodeColor(raw, resolvedDefault) : resolvedDefault;
    });

    let nodeX: number[] | undefined, nodeY: number[] | undefined;
    if (scenario.hasDraggedNodes && Object.keys(scenario.nodePositions).length > 0) {
      const xs = labels.map(l => scenario.nodePositions[l]?.x);
      const ys = labels.map(l => scenario.nodePositions[l]?.y);
      if (xs.every(x => x != null)) {
        nodeX = xs;
        nodeY = ys;
      }
    }

    if (!nodeX && config.nodeAlignment !== 'justify') {
      nodeX = computeAlignedX(src, tgt, val, labels, config.nodeAlignment);
    }

    const nodeMeta = labels.map((l, i) => [l, nodeIn[i], nodeOut[i]]);
    const linkMeta = src.map((s, i) => [labels[s], labels[tgt[i]], val[i]]);

    const nodeSpec: any = {
      pad: config.nodeSpacing,
      thickness: config.nodeThickness,
      label: displayLabels,
      align: config.nodeAlignment,
      color: nodeColors,
      line: { color: config.bgColor, width: 1 },
      customdata: nodeMeta,
      hovertemplate: '<b>%{customdata[0]}</b><br>Input: %{customdata[1]:.0f}<br>Output: %{customdata[2]:.0f}<extra></extra>',
    };

    if (nodeX && nodeY) {
      nodeSpec.x = nodeX;
      nodeSpec.y = nodeY;
    } else if (nodeX) {
      nodeSpec.x = nodeX;
    }

    const sankeyTrace: any = {
      type: 'sankey',
      orientation: config.orientation,
      arrangement: (nodeX && nodeY) ? 'freeform' : config.nodeArrangement,
      textfont: { color: config.labelColor, size: config.labelSize },
      node: nodeSpec,
      link: {
        source: src,
        target: tgt,
        value: val,
        color: linkColors,
        arrowlen: config.arrowSize,
        customdata: linkMeta,
        hovertemplate: '<b>%{customdata[0]}</b> → <b>%{customdata[1]}</b><br>Flow: %{customdata[2]:.0f} ' + config.valueUnit + '<extra></extra>',
      },
    };

    // Build gradient bar
    const N = 20;
    const { highVal, lowVal, midVal, hotHighCol, hotLowCol, coldHighCol, coldLowCol } = config;
    const range = highVal - lowVal;
    const barColors = [];
    for (let i = 0; i < N; i++) {
      const v2 = highVal - (i + 0.5) * (range / N);
      let c = v2 >= midVal
        ? interpolateRgb(v2, midVal, highVal, hotLowCol, hotHighCol, 1.0)
        : interpolateRgb(v2, lowVal, midVal, coldLowCol, coldHighCol, 1.0);
      barColors.push(c.replace(/,\s*[\d.]+\)$/, ')').replace('rgba', 'rgb'));
    }
    const midTick = N * (midVal - lowVal) / (range || 1);
    const barTraces = barColors.map((color, i) => ({
      type: 'bar', x: [''], y: [1], base: N - i - 1,
      marker: { color, line: { width: 0 } },
      showlegend: false, hoverinfo: 'skip',
    }));

    const barW = 0.015;
    const gapFrac = config.gradGap / config.figWidth;
    const rightMarginFrac = 50 / config.figWidth;
    const sankeyEnd = 1 - gapFrac - barW - rightMarginFrac;
    const barStart = sankeyEnd + gapFrac;
    const barEnd = barStart + barW;

    sankeyTrace.domain = { x: [0, Math.max(0.5, sankeyEnd - 0.005)], y: [0, 1] };

    const layout: any = {
      width: config.figWidth,
      height: config.figHeight,
      paper_bgcolor: config.bgColor,
      plot_bgcolor: config.bgColor,
      barmode: 'stack',
      bargap: 0,
      margin: { l: config.hMargin, r: 40, t: config.vMargin, b: config.vMargin },
      xaxis: { visible: false, domain: [barStart, Math.min(barEnd, 0.999)] },
      yaxis: {
        tickvals: [0, midTick, N],
        ticktext: [String(Math.round(lowVal)), String(Math.round(midVal)), String(Math.round(highVal))],
        tickfont: { color: config.labelColor, size: Math.max(9, config.labelSize - 2) },
        side: 'right',
        showgrid: false,
        zeroline: false,
        range: [0, N],
        tickmode: 'array',
        showline: false,
        title: { text: config.gradUnit, font: { color: config.labelColor, size: Math.max(9, config.labelSize - 2) }, standoff: 4 },
      },
    };

    Plotly.react(containerRef.current, [sankeyTrace, ...barTraces], layout, {
      displayModeBar: true,
      displaylogo: false,
      modeBarButtonsToRemove: ['toImage'],
      responsive: false,
    }).then((gd: any) => {
      plotRef.current = gd;
      gd.on('plotly_restyle', (data: any) => {
        if (!data?.[0]) return;
        const changes = data[0];
        const xs = changes['node.x']?.[0];
        const ys = changes['node.y']?.[0];
        if (!xs || !ys || !onNodeDrag) return;
        const positions: Record<string, { x: number; y: number }> = {};
        labels.forEach((l, i) => {
          if (xs[i] != null && ys[i] != null) {
            positions[l] = { x: xs[i], y: ys[i] };
          }
        });
        onNodeDrag(positions);
      });

      if (animating) applyFlowAnimation(gd, animSpeed);
    });

  }, [scenario, config, animating, animSpeed]);

  const applyFlowAnimation = (gd: any, speed: number) => {
    // Clear old animations
    const container = containerRef.current;
    if (!container) return;
    container.querySelectorAll('#sl-anim-style, .sl-anim-overlay, #sl-anim-defs').forEach(e => e.remove());

    const paths = Array.from(container.querySelectorAll('.sankey .links path')) as SVGPathElement[];
    if (!paths.length) return;

    const svgNS = 'http://www.w3.org/2000/svg';
    const style = document.createElement('style');
    style.id = 'sl-anim-style';
    style.textContent = `
      @keyframes sl-shimmer {
        0%   { opacity: 0; }
        40%  { opacity: 0; }
        50%  { opacity: 1; }
        60%  { opacity: 0; }
        100% { opacity: 0; }
      }
      .sl-anim-overlay {
        animation: sl-shimmer ${speed}s linear infinite;
        pointer-events: none;
      }
    `;
    container.appendChild(style);

    const targetSvg = paths[0].ownerSVGElement;
    if (!targetSvg) return;

    const defs = document.createElementNS(svgNS, 'defs');
    defs.id = 'sl-anim-defs';
    
    paths.forEach((path, idx) => {
      let bbox;
      try { bbox = path.getBBox(); } catch (e) { return; }
      if (!bbox || bbox.width < 4) return;

      const gid = `sl-g-${idx}`;
      const grad = document.createElementNS(svgNS, 'linearGradient');
      grad.id = gid;
      grad.setAttribute('gradientUnits', 'userSpaceOnUse');
      grad.setAttribute('x1', String(bbox.x - bbox.width));
      grad.setAttribute('x2', String(bbox.x));
      grad.setAttribute('y1', String(bbox.y + bbox.height / 2));
      grad.setAttribute('y2', String(bbox.y + bbox.height / 2));

      [['0%', '0'], ['40%', '0'], ['50%', '0.5'], ['60%', '0'], ['100%', '0']].forEach(([off, op]) => {
        const s = document.createElementNS(svgNS, 'stop');
        s.setAttribute('offset', off);
        s.setAttribute('stop-color', '#ffffff');
        s.setAttribute('stop-opacity', op);
        grad.appendChild(s);
      });

      const ax1 = document.createElementNS(svgNS, 'animate');
      ax1.setAttribute('attributeName', 'x1');
      ax1.setAttribute('values', `${bbox.x - bbox.width};${bbox.x + bbox.width}`);
      ax1.setAttribute('dur', `${speed}s`);
      ax1.setAttribute('repeatCount', 'indefinite');
      ax1.setAttribute('begin', `${((idx / paths.length) * speed).toFixed(2)}s`);
      grad.appendChild(ax1);

      const ax2 = document.createElementNS(svgNS, 'animate');
      ax2.setAttribute('attributeName', 'x2');
      ax2.setAttribute('values', `${bbox.x};${bbox.x + bbox.width * 2}`);
      ax2.setAttribute('dur', `${speed}s`);
      ax2.setAttribute('repeatCount', 'indefinite');
      ax2.setAttribute('begin', `${((idx / paths.length) * speed).toFixed(2)}s`);
      grad.appendChild(ax2);

      defs.appendChild(grad);

      const overlay = path.cloneNode(false) as SVGPathElement;
      overlay.setAttribute('fill', `url(#${gid})`);
      overlay.removeAttribute('stroke');
      overlay.classList.add('sl-anim-overlay');
      path.parentNode?.insertBefore(overlay, path.nextSibling);
    });

    targetSvg.insertBefore(defs, targetSvg.firstChild);
  };

  return (
    <div className="relative inline-block" ref={containerRef} />
  );
};
