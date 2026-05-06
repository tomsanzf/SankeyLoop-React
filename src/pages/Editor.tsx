import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { Menu, Save, Upload, Download, RotateCcw, Video, Table as TableIcon, FileText, ChevronRight, Sun, Moon } from 'lucide-react';
import { Config, Scenario, Flow } from '../types';
import { DEFAULT_FLOWS } from '../constants';
import { SankeyDiagram } from '../components/SankeyDiagram';
import { cn } from '../lib/utils';
import { GuidedSetup } from '../components/GuidedSetup';
import { buildSankeyData, computeAlignedX, resolveNodeColor, interpolateRgb, getExportDimensions, computeSankeyMetrics } from '../lib/sankeyUtils';
import Plotly from 'plotly.js-dist-min';
import * as gifenc from 'gifenc';

const INITIAL_CONFIG: Config = {
  orientation: 'h',
  highVal: 180,
  hotHighCol: '#FF0000',
  hotLowCol: '#FFFF00',
  midVal: 45,
  coldHighCol: '#0000FF',
  coldLowCol: '#800080',
  lowVal: 0,
  nodeAlignment: 'center',
  nodeArrangement: 'snap',
  vMargin: 100,
  hMargin: 50,
  nodeSpacing: 50,
  nodeThickness: 10,
  linkOpacity: 0.7,
  ghostOpacity: 0.12,
  arrowSize: 15,
  labelSize: 13,
  labelColor: '#1e293b',
  defaultNodeColor: '#808080',
  figWidth: 1200,
  figHeight: 800,
  valueUnit: 'kW',
  gradUnit: '°C',
  gradGap: 20,
  aspectRatio: 'fit',
  theme: 'dark',
  bgColor: '#ffffff',
};

const INITIAL_SCENARIOS = {
  before: {
    flows: [
      { Source: "Gas", Target: "Boiler", Value: "217", Color: "Black" },
      { Source: "Boiler", Target: "Steam", Value: "186", Color: "200" },
      { Source: "Boiler", Target: "Purge", Value: "1", Color: "170" },
      { Source: "Boiler", Target: "Stack", Value: "30", Color: "Black" },
      { Source: "Steam", Target: "Deaerator", Value: "17", Color: "200" },
      { Source: "Deaerator", Target: "Boiler", Value: "6", Color: "105" },
      { Source: "Feedwater", Target: "Deaerator", Value: "-11", Color: "20" },
      { Source: "Steam", Target: "Process", Value: "167", Color: "200" },
      { Source: "Process", Target: "Condensate Return", Value: "0", Color: "90" },
      { Source: "Process", Target: "Cndnste Not Returned", Value: "0", Color: "Black" },
      { Source: "Condensate Return", Target: "Deaerator", Value: "0", Color: "90" },
      { Source: "Process", Target: "Chilled Water", Value: "60", Color: "20" },
      { Source: "Chilled Water", Target: "Chiller", Value: "60", Color: "10" },
      { Source: "Elec", Target: "Chiller", Value: "20", Color: "Elec" },
      { Source: "Chiller", Target: "Cooling Tower", Value: "80", Color: "30" },
      { Source: "", Target: "", Value: "", Color: "" }
    ],
    nodeColorOverrides: {},
    nodePositions: {
      "Gas": { x: 0.004887346659498558, y: 0.38095962284236945 },
      "Boiler": { x: 0.14759466609279387, y: 0.4038372240387298 },
      "Steam": { x: 0.2883470468622898, y: 0.4660113299368874 },
      "Purge": { x: 0.29225692418988863, y: 0.7612348870808306 },
      "Stack": { x: 0.29225692418988863, y: 0.6703736091045045 },
      "Deaerator": { x: 0.7115816585026772, y: 0.6994790763693511 },
      "Feedwater": { x: 0.8669960792506688, y: 0.7578124097026844 },
      "Process": { x: 0.43594171295508366, y: 0.36483678904831957 },
      "Condensate Return": { x: 0.5933110723668746, y: 0.5853511991513078 },
      "Cndnste Not Returned": { x: 0.5962434803625738, y: 0.510765812742163 },
      "Chilled Water": { x: 0.5913561337030752, y: 0.3022049808662601 },
      "Chiller": { x: 0.7213563518216742, y: 0.30463663963966736 },
      "Elec": { x: 0.5903786643711755, y: 0.4189786102480563 },
      "Cooling Tower": { x: 0.8757933032377662, y: 0.39877527281381264 }
    },
    hasDraggedNodes: true,
    nodeSpacing: 50
  },
  after: {
    flows: [
      { Source: "Gas", Target: "Boiler", Value: "78", Color: "Black" },
      { Source: "Boiler", Target: "Steam", Value: "67", Color: "200" },
      { Source: "Boiler", Target: "Purge", Value: "1", Color: "170" },
      { Source: "Boiler", Target: "Stack", Value: "10", Color: "Black" },
      { Source: "Steam", Target: "Deaerator", Value: "6", Color: "200" },
      { Source: "Deaerator", Target: "Boiler", Value: "2", Color: "105" },
      { Source: "Feedwater", Target: "Deaerator", Value: "-4", Color: "20" },
      { Source: "Steam", Target: "Process", Value: "60", Color: "200" },
      { Source: "Process", Target: "Condensate Return", Value: "0", Color: "90" },
      { Source: "Process", Target: "Cndnste Not Returned", Value: "0", Color: "Black" },
      { Source: "Condensate Return", Target: "Deaerator", Value: "0", Color: "90" },
      { Source: "Process", Target: "Chilled Water", Value: "60", Color: "20" },
      { Source: "Chilled Water", Target: "Chiller", Value: "60", Color: "10" },
      { Source: "Elec", Target: "Chiller", Value: "20", Color: "Elec" },
      { Source: "Chiller", Target: "HP", Value: "80", Color: "30" },
      { Source: "Elec", Target: "HP", Value: "27", Color: "Elec" },
      { Source: "HP", Target: "Process", Value: "107", Color: "90" },
      { Source: "", Target: "", Value: "", Color: "" }
    ],
    nodeColorOverrides: {},
    nodePositions: {
      "Gas": { x: 0.004887346659498558, y: 0.38095962284236945 },
      "Boiler": { x: 0.14759466609279387, y: 0.4038372240387298 },
      "Steam": { x: 0.2883470468622898, y: 0.4660113299368874 },
      "Purge": { x: 0.29225692418988863, y: 0.7612348870808306 },
      "Stack": { x: 0.29225692418988863, y: 0.6703736091045045 },
      "Deaerator": { x: 0.7115816585026772, y: 0.6994790763693511 },
      "Feedwater": { x: 0.8669960792506688, y: 0.7578124097026844 },
      "Process": { x: 0.43594171295508366, y: 0.36483678904831957 },
      "Condensate Return": { x: 0.5933110723668746, y: 0.5853511991513078 },
      "Cndnste Not Returned": { x: 0.5962434803625738, y: 0.510765812742163 },
      "Chilled Water": { x: 0.5913561337030752, y: 0.3022049808662601 },
      "Chiller": { x: 0.7213563518216742, y: 0.30463663963966736 },
      "Elec": { x: 0.5903786643711755, y: 0.4189786102480563 },
      "HP": { x: 0.8669960792506688, y: 0.32544193948047934 }
    },
    hasDraggedNodes: true,
    nodeSpacing: 50
  }
};

export default function Editor() {
  const [config, setConfig] = useState<Config>(INITIAL_CONFIG);
  const [scenarios, setScenarios] = useState<{ before: Scenario; after: Scenario }>(INITIAL_SCENARIOS);

  useEffect(() => {
    const saved = localStorage.getItem('sankeyloop_load_example');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.config) setConfig(prev => ({ ...prev, ...data.config }));
        if (data.flows) {
          setScenarios({
            before: { ...INITIAL_SCENARIOS.before, flows: data.flows },
            after: { ...INITIAL_SCENARIOS.after, flows: data.flows },
          });
        }
        localStorage.removeItem('sankeyloop_load_example');
      } catch (e) {
        console.error('Failed to load example', e);
      }
    }
  }, []);
  const [editScenario, setEditScenario] = useState<'before' | 'after'>('before');
  const [viewScenario, setViewScenario] = useState<'before' | 'after'>('before');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dataSectionHeight, setDataSectionHeight] = useState(300);
  const [dataSectionOpen, setDataSectionOpen] = useState(true);
  const [inputMode, setInputMode] = useState<'table' | 'text' | 'guided'>('table');
  const [isViewsSynced, setIsViewsSynced] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [animSpeed, setAnimSpeed] = useState(3);
  const [renderedPPUs, setRenderedPPUs] = useState<{ before: number | null, after: number | null }>({ before: null, after: null });
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    save: false,
    theme: true,
    thermal: false,
    layout: false,
    visual: false,
    typography: false,
    nodes: false,
  });

  const activeScenario = scenarios[viewScenario];
  const editScenarioData = scenarios[editScenario];

  const updateConfig = (updates: Partial<Config>) => setConfig(prev => ({ ...prev, ...updates }));

  const updateScenario = (key: 'before' | 'after', updates: Partial<Scenario>) => {
    setScenarios(prev => ({
      ...prev,
      [key]: { ...prev[key], ...updates },
    }));
  };

  const handleNodeDrag = (positions: Record<string, { x: number; y: number }>) => {
    if (isViewsSynced) {
      setScenarios(prev => ({
        ...prev,
        before: { ...prev.before, nodePositions: positions, hasDraggedNodes: true },
        after: { ...prev.after, nodePositions: positions, hasDraggedNodes: true },
      }));
    } else {
      updateScenario(viewScenario, {
        nodePositions: positions,
        hasDraggedNodes: true,
      });
    }
  };

  const toggleSyncViews = () => {
    setIsViewsSynced(prev => {
      const next = !prev;
      if (next) {
        setScenarios(curr => {
          const bFlows = [...curr.before.flows];
          const aFlows = [...curr.after.flows];

          const getFlowKey = (f: Flow) => `${String(f.Source).trim()}||${String(f.Target).trim()}`;
          
          const bMap = new Map(bFlows.map(f => [getFlowKey(f), f]));
          const aMap = new Map(aFlows.map(f => [getFlowKey(f), f]));

          bFlows.forEach(bf => {
            if (!aMap.has(getFlowKey(bf))) {
              aFlows.push({ ...bf, Value: '1e-9' });
            }
          });

          aFlows.forEach(af => {
            if (!bMap.has(getFlowKey(af))) {
              bFlows.push({ ...af, Value: '1e-9' });
            }
          });

          const currentScenario = viewScenario === 'before' ? curr.before : curr.after;

          return {
            before: { 
              ...curr.before, 
              flows: bFlows,
              nodePositions: { ...currentScenario.nodePositions },
              hasDraggedNodes: currentScenario.hasDraggedNodes
            },
            after: { 
              ...curr.after, 
              flows: aFlows,
              nodePositions: { ...currentScenario.nodePositions },
              hasDraggedNodes: currentScenario.hasDraggedNodes
            }
          };
        });
      }
      return next;
    });
  };

  const handleDataSectionResizeStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const startY = e.clientY;
    const startHeight = dataSectionHeight;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const delta = moveEvent.clientY - startY;
      // When dragging the bottom handle down, delta is positive, so we INCREASE the height.
      const newHeight = Math.max(80, Math.min(window.innerHeight * 0.75, startHeight + delta));
      setDataSectionHeight(newHeight);
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.body.style.cursor = 'ns-resize';
    document.body.style.userSelect = 'none';
  }, [dataSectionHeight]);

  const resetLayout = () => {
    if (isViewsSynced) {
      setScenarios(prev => ({
        ...prev,
        before: { ...prev.before, nodePositions: {}, hasDraggedNodes: false },
        after: { ...prev.after, nodePositions: {}, hasDraggedNodes: false },
      }));
    } else {
      updateScenario(viewScenario, {
        nodePositions: {},
        hasDraggedNodes: false,
      });
    }
  };

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        if (data.config) setConfig({ ...INITIAL_CONFIG, ...data.config });
        if (data.scenarios) setScenarios(data.scenarios);
        else if (data.flows) {
           setScenarios({
            before: { ...INITIAL_SCENARIOS.before, flows: data.flows },
            after: { ...INITIAL_SCENARIOS.after, flows: data.flows },
          });
        }
      } catch (err) {
        alert('Failed to import config');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleExport = () => {
    const data = { config, scenarios };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sankeyloop_config.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportImage = async (format: 'png' | 'svg') => {
    const plotEl = document.querySelector('.js-plotly-plot') as any;
    if (!plotEl) return;
    try {
      const dims = getExportDimensions(config);
      await Plotly.downloadImage(plotEl, {
        format,
        filename: 'sankeyloop',
        width: dims.width,
        height: dims.height,
      });
    } catch (err) {
      console.error('Export failed:', err);
    }
  };

  const [exportingVideo, setExportingVideo] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [gifPreviewUrl, setGifPreviewUrl] = useState<string | null>(null);
  
  type VideoDebugInfo = {
    frame: number;
    ppu_n: number;
    np_n: number;
    x: number;
    target: number;
    np_corrected: number;
    ppu_after: number;
  };
  const [videoDebugInfo, setVideoDebugInfo] = useState<VideoDebugInfo[]>([]);

  const exportTransitionVideo = async () => {
    try {
      setExportingVideo(true);
      setVideoProgress(0);

      // === Use the live Plotly element — same renderer as the static PNG export ===
      const plotEl = document.querySelector('.js-plotly-plot') as any;
      if (!plotEl) {
        alert('No diagram found. Make sure a scenario is visible before exporting.');
        setExportingVideo(false);
        return;
      }

      // Read the actual rendered height from the live element — this is the
      // scaleFactor the static view already uses correctly.
      const liveHeight: number = plotEl._fullLayout?.height ?? 800;
      const BASE_HEIGHT = 800;
      const scaleFactor = liveHeight / BASE_HEIGHT;

      const fps = 15;
      const duration = animSpeed || 3;
      const pauseDuration = 0.5;
      const nFramesBody = duration * fps;
      const nFramesPause = Math.round(pauseDuration * fps);
      const nFrames = nFramesBody + 2 * nFramesPause;
      const delayMs = Math.round(1000 / fps);

      const dims = getExportDimensions(config);

      // ── Inline trace builder — mirrors SankeyDiagram.tsx exactly ──────────────
      // Using the live scaleFactor guarantees identical scaling to the static view.
      const buildFrame = (scenario: Scenario) => {
        const { labels, src, tgt, val, linkColors } = buildSankeyData(scenario.flows, config);
        if (!labels.length) return null;

        const nodeIn = new Array(labels.length).fill(0);
        const nodeOut = new Array(labels.length).fill(0);
        for (let i = 0; i < src.length; i++) {
          nodeOut[src[i]] += val[i];
          nodeIn[tgt[i]] += val[i];
        }

        const displayLabels = labels.map((l, i) => {
          const total = Math.round(Math.max(nodeIn[i], nodeOut[i]));
          return l ? `${l}<br>${total.toLocaleString('en').replace(/,/g, '\u2009')} ${config.valueUnit}` : '';
        });

        const resolvedDefault = resolveNodeColor(config.defaultNodeColor, '#808080');
        const nodeColors = labels.map(l => {
          if (!l) return 'rgba(0,0,0,0)';
          const raw = scenario.nodeColorOverrides[l];
          return (raw !== undefined && raw !== '') ? resolveNodeColor(raw, resolvedDefault) : resolvedDefault;
        });

        // Node positions — same ghost-node logic as SankeyDiagram.tsx
        let nodeX: number[] | undefined, nodeY: number[] | undefined;
        if (scenario.hasDraggedNodes && Object.keys(scenario.nodePositions).length > 0) {
          const parsedX = labels.map(l => l ? scenario.nodePositions[l]?.x : undefined).filter(x => x !== undefined) as number[];
          const sortedX = [...parsedX].sort((a, b) => a - b);
          let safeX = 0, found = false;
          for (let i = 0; i < sortedX.length - 1; i++) {
            if (sortedX[i + 1] - sortedX[i] > 0.05) { safeX = sortedX[i] + 0.025; found = true; break; }
          }
          if (!found) safeX = (sortedX[sortedX.length - 1] || 0) + 0.05;
          if (safeX > 1) safeX = -0.5;

          const xs = labels.map((l, i) => l ? scenario.nodePositions[l]?.x : (i === labels.length - 2 ? safeX : safeX + 0.001));
          const ys = labels.map((l, i) => l ? scenario.nodePositions[l]?.y : 0.5);
          if (xs.every(x => x != null)) { nodeX = xs as number[]; nodeY = ys as number[]; }
        }
        if (!nodeX && config.nodeAlignment !== 'justify') {
          nodeX = computeAlignedX(src, tgt, val, labels, config.nodeAlignment);
        }

        // Scale exactly as SankeyDiagram.tsx does — using the live container's scaleFactor
        const scaledNodeSpacing = (scenario.nodeSpacing ?? config.nodeSpacing) * scaleFactor;
        const scaledNodeThickness = config.nodeThickness * scaleFactor;
        const scaledLabelSize = config.labelSize * scaleFactor;
        const scaledVMargin = config.vMargin * scaleFactor;
        const scaledHMargin = config.hMargin * scaleFactor;

        const nodeSpec: any = {
          pad: scaledNodeSpacing,
          thickness: scaledNodeThickness,
          label: displayLabels,
          align: config.nodeAlignment,
          color: nodeColors,
          line: { color: config.bgColor, width: 1 },
        };
        if (nodeX && nodeY) { nodeSpec.x = nodeX; nodeSpec.y = nodeY; }
        else if (nodeX) { nodeSpec.x = nodeX; }

        const sankeyTrace: any = {
          type: 'sankey',
          orientation: config.orientation,
          arrangement: (nodeX && nodeY) ? 'freeform' : config.nodeArrangement,
          textfont: { color: config.labelColor, size: Math.max(8, scaledLabelSize) },
          node: nodeSpec,
          link: { source: src, target: tgt, value: val, color: [...linkColors], arrowlen: config.arrowSize },
        };

        // Gradient bar — identical to SankeyDiagram.tsx
        const N = 20;
        const { highVal, lowVal, midVal, hotHighCol, hotLowCol, coldHighCol, coldLowCol } = config;
        const range = highVal - lowVal;
        const barColors: string[] = [];
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
        const loopbackPaddingFrac = 60 / config.figWidth;
        const sankeyEnd = 1 - gapFrac - barW - rightMarginFrac - loopbackPaddingFrac;
        const barStart = 1 - barW - rightMarginFrac;
        const barEnd = barStart + barW;
        sankeyTrace.domain = { x: [0, Math.max(0.5, sankeyEnd - 0.005)], y: [0, 1] };

        // autosize: true — same as the live view, NOT fixed width/height.
        // Plotly.toImage() will then render at the requested export dims.
        const layout: any = {
          autosize: true,
          paper_bgcolor: config.bgColor,
          plot_bgcolor: config.bgColor,
          barmode: 'stack',
          bargap: 0,
          margin: { l: scaledHMargin, r: 40, t: Math.max(10, scaledVMargin), b: Math.max(10, scaledVMargin) },
          xaxis: { visible: false, domain: [barStart, Math.min(barEnd, 0.999)] },
          yaxis: {
            tickvals: [0, midTick, N],
            ticktext: [String(Math.round(lowVal)), String(Math.round(midVal)), String(Math.round(highVal))],
            tickfont: { color: config.labelColor, size: Math.max(8, scaledLabelSize - 2) },
            side: 'right', showgrid: false, zeroline: false, range: [0, N],
            tickmode: 'array', showline: false,
            title: { text: config.gradUnit, font: { color: config.labelColor, size: Math.max(8, scaledLabelSize - 2) }, standoff: 4 },
          },
        };

        return { traces: [sankeyTrace, ...barTraces] as any[], layout, linkColors };
      };
      // ── End trace builder ──────────────────────────────────────────────────────

      // GIF setup
      const GIFEncoderFn = gifenc.GIFEncoder || gifenc.default || ((gifenc as any).default?.GIFEncoder);
      if (!GIFEncoderFn) throw new Error('GIFEncoder not found in gifenc module');
      const gif = GIFEncoderFn();

      const canvas = document.createElement('canvas');
      canvas.width = dims.width;
      canvas.height = dims.height;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) { alert('Canvas context failed'); setExportingVideo(false); return; }

      // Build merged flow map (before + after)
      const flowMap = new Map<string, { b: Flow, a: Flow }>();
      const matchesBefore = new Map<string, number>();
      scenarios.before.flows.forEach(fl => {
        const s = String(fl.Source).trim(); const t = String(fl.Target).trim();
        if (!s || !t) return;
        const baseKey = `${s}||${t}`;
        const c = matchesBefore.get(baseKey) || 0; matchesBefore.set(baseKey, c + 1);
        flowMap.set(`${baseKey}||${c}`, { b: fl, a: { Source: fl.Source, Target: fl.Target, Value: '0', Color: fl.Color } });
      });
      const matchesAfter = new Map<string, number>();
      scenarios.after.flows.forEach(fl => {
        const s = String(fl.Source).trim(); const t = String(fl.Target).trim();
        if (!s || !t) return;
        const baseKey = `${s}||${t}`;
        const c = matchesAfter.get(baseKey) || 0; matchesAfter.set(baseKey, c + 1);
        const key = `${baseKey}||${c}`;
        if (flowMap.has(key)) { flowMap.get(key)!.a = fl; }
        else { flowMap.set(key, { b: { Source: fl.Source, Target: fl.Target, Value: '0', Color: fl.Color }, a: fl }); }
      });
      const allFlowsArr = Array.from(flowMap.values());

      let PPU_0 = 0;
      const NP_0 = scenarios.before.nodeSpacing ?? config.nodeSpacing;
      const NP_end = scenarios.after.nodeSpacing ?? config.nodeSpacing;
      const debugInfo: VideoDebugInfo[] = [];

      // ── Frame loop ─────────────────────────────────────────────────────────────
      for (let f = 0; f < nFrames; f++) {
        setVideoProgress(Math.round((f / nFrames) * 90));
        await new Promise(r => setTimeout(r, 5));

        let ratio = 0;
        if (f < nFramesPause) ratio = 0;
        else if (f >= nFramesPause + nFramesBody) ratio = 1;
        else ratio = (f - nFramesPause) / (nFramesBody - 1);
        const t = 0.5 - 0.5 * Math.cos(Math.PI * ratio);

        // Interpolate flow values and opacity
        const opacities: number[] = new Array(allFlowsArr.length).fill(config.linkOpacity);
        const interpolatedFlows: Flow[] = allFlowsArr.map((item, i) => {
          let valB = parseFloat(String(item.b.Value).replace(',', '.')) || 0; if (valB < 0) valB = Math.abs(valB);
          let valA = parseFloat(String(item.a.Value).replace(',', '.')) || 0; if (valA < 0) valA = Math.abs(valA);
          let currentVal = valB + (valA - valB) * t;
          if (currentVal < 0.001) currentVal = 1e-5;

          if (valB === 0 && valA > 0) opacities[i] = t * config.linkOpacity;
          else if (valB > 0 && valA === 0) opacities[i] = (1 - t) * config.linkOpacity;
          else if (valB === 0 && valA === 0) opacities[i] = config.ghostOpacity;
          else opacities[i] = config.linkOpacity;

          return { Source: item.b.Source, Target: item.b.Target, Value: String(currentVal), Color: t < 0.5 ? item.b.Color : item.a.Color };
        });

        // Interpolate pad
        const padB = scenarios.before.nodeSpacing ?? config.nodeSpacing;
        const padA = scenarios.after.nodeSpacing ?? config.nodeSpacing;
        const dynamicPad = padB + (padA - padB) * t;

        // Interpolate node positions
        const posBMap = scenarios.before.hasDraggedNodes ? scenarios.before.nodePositions : (scenarios.before.nativePositions || scenarios.before.nodePositions);
        const posAMap = scenarios.after.hasDraggedNodes ? scenarios.after.nodePositions : (scenarios.after.nativePositions || scenarios.after.nodePositions);
        const interpolatedPositions: Record<string, { x: number; y: number }> = {};
        const allNodeNames = new Set([...Object.keys(posBMap || {}), ...Object.keys(posAMap || {})]);
        allNodeNames.forEach(name => {
          const posB = (posBMap || {})[name] || (posAMap || {})[name];
          const posA = (posAMap || {})[name] || (posBMap || {})[name];
          if (posB && posA) interpolatedPositions[name] = { x: posB.x + (posA.x - posB.x) * t, y: posB.y + (posA.y - posB.y) * t };
        });

        const frameScenarioBase: Scenario = {
          flows: interpolatedFlows,
          nodeColorOverrides: t < 0.5 ? scenarios.before.nodeColorOverrides : scenarios.after.nodeColorOverrides,
          nodePositions: interpolatedPositions,
          hasDraggedNodes: Object.keys(interpolatedPositions).length > 0,
          nodeSpacing: dynamicPad,
        };

        let NP_corrected = dynamicPad;
        const scaledVMarginBase = config.vMargin * scaleFactor;
        
        let PPU_n = 0;
        let target = 0;
        let x = 0;
        let PPU_aftercorrection = 0;

        if (f === 0) {
          const scaledNodeSpacingBase = dynamicPad * scaleFactor;
          PPU_0 = computeSankeyMetrics(frameScenarioBase, { ...config, figHeight: liveHeight, vMargin: scaledVMarginBase, nodeSpacing: scaledNodeSpacingBase }).ppu;
          PPU_n = PPU_0;
          target = NP_0;
          PPU_aftercorrection = PPU_0;
        } else {
          const scaledNodeSpacingBase = dynamicPad * scaleFactor;
          PPU_n = computeSankeyMetrics(frameScenarioBase, { ...config, figHeight: liveHeight, vMargin: scaledVMarginBase, nodeSpacing: scaledNodeSpacingBase }).ppu;
          x = Math.min(1.6, Math.abs(PPU_n - PPU_0) / PPU_0);
          target = PPU_n > PPU_0 ? NP_end : NP_0;
          NP_corrected = dynamicPad + x * (target - dynamicPad);
          NP_corrected = Math.max(0, NP_corrected);
          
          const scaledNodeSpacingCorrected = NP_corrected * scaleFactor;
          PPU_aftercorrection = computeSankeyMetrics({ ...frameScenarioBase, nodeSpacing: NP_corrected }, { ...config, figHeight: liveHeight, vMargin: scaledVMarginBase, nodeSpacing: scaledNodeSpacingCorrected }).ppu;
        }

        debugInfo.push({
          frame: f,
          ppu_n: PPU_n,
          np_n: dynamicPad,
          x,
          target,
          np_corrected: NP_corrected,
          ppu_after: PPU_aftercorrection,
        });

        const frameScenario: Scenario = {
          ...frameScenarioBase,
          nodeSpacing: NP_corrected,
        };

        const built = buildFrame(frameScenario);
        if (!built) continue;

        // Apply per-link opacity
        built.traces[0].link.color = built.traces[0].link.color.map((c: string, i: number) =>
          c.replace(/[\d.]+\)$/, `${opacities[i].toFixed(3)})`)
        );

        // ── Render on the live element (same path as static PNG export) ──────────
        await Plotly.react(plotEl, built.traces, built.layout, { displayModeBar: false, responsive: true });

        // Capture at export dims — identical to exportImage()
        const dataUrl = await Plotly.toImage(plotEl, { format: 'png', width: dims.width, height: dims.height });

        const img = new Image();
        await new Promise(r => { img.onload = () => r(null); img.onerror = () => r(null); img.src = dataUrl; });

        ctx.fillStyle = config.bgColor || '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
        await new Promise(r => setTimeout(r, 10));

        const quantizeFn = gifenc.quantize || (gifenc as any).default?.quantize;
        const applyPaletteFn = gifenc.applyPalette || (gifenc as any).default?.applyPalette;
        const palette = quantizeFn(data, 256, { format: 'rgb565' });
        const index = applyPaletteFn(data, palette);
        gif.writeFrame(index, canvas.width, canvas.height, { palette, delay: delayMs });
      }

      setVideoProgress(100);
      gif.finish();
      const blob = new Blob([gif.bytes()], { type: 'image/gif' });
      setGifPreviewUrl(URL.createObjectURL(blob));
      setVideoDebugInfo(debugInfo);

    } catch (e) {
      console.error('Failed to create GIF', e);
      alert('Failed to create GIF: ' + String(e));
    } finally {
      // Force SankeyDiagram to re-render its actual scenario onto the live element
      setConfig(prev => ({ ...prev }));
      setExportingVideo(false);
    }
  };

  const handleFlowChange = (index: number, field: keyof Flow, value: string) => {
    const newFlows = [...editScenarioData.flows];
    newFlows[index] = { ...newFlows[index], [field]: value };
    
    // Ensure trailing empty row
    if (index === newFlows.length - 1 && value.trim() !== '') {
      newFlows.push({ Source: '', Target: '', Value: '', Color: '' });
    }

    updateScenario(editScenario, { flows: newFlows });
  };

  const deleteFlow = (index: number) => {
    const newFlows = [...editScenarioData.flows];
    newFlows.splice(index, 1);
    if (newFlows.length === 0) newFlows.push({ Source: '', Target: '', Value: '', Color: '' });
    updateScenario(editScenario, { flows: newFlows });
  };

  const clearAllFlows = () => {
    updateScenario(editScenario, {
      flows: [{ Source: '', Target: '', Value: '', Color: '' }],
      nodeColorOverrides: {},
    });
  };

  const handleTablePaste = (e: React.ClipboardEvent<HTMLInputElement>, startRow: number, startField: keyof Flow) => {
    const pasteData = e.clipboardData.getData('text');
    if (!pasteData || (!pasteData.includes('\t') && !pasteData.includes('\n'))) {
      return;
    }
    e.preventDefault();
    const rows = pasteData.split(/\r?\n/).filter(line => line.trim() !== '');
    const newFlows = [...editScenarioData.flows];
    
    const colKeys: (keyof Flow)[] = ['Source', 'Target', 'Value', 'Color'];
    const startColIdx = colKeys.indexOf(startField);

    let currentRow = startRow;
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].split('\t');
      if (!newFlows[currentRow]) {
        newFlows[currentRow] = { Source: '', Target: '', Value: '', Color: '' };
      }
      let cellIdx = 0;
      for (let c = startColIdx; c < colKeys.length && cellIdx < cells.length; c++) {
        newFlows[currentRow][colKeys[c]] = cells[cellIdx].trim();
        cellIdx++;
      }
      currentRow++;
    }

    if (newFlows.length > 0 && (newFlows[newFlows.length - 1].Source.trim() !== '' || newFlows[newFlows.length - 1].Target.trim() !== '')) {
      newFlows.push({ Source: '', Target: '', Value: '', Color: '' });
    }

    updateScenario(editScenario, { flows: newFlows });
  };

  const { labels } = useMemo(() => buildSankeyData(activeScenario.flows, config), [activeScenario.flows, config]);

  return (
    <div className="flex h-screen overflow-hidden text-[13px] leading-relaxed transition-colors duration-200 bg-[var(--bg)] text-[var(--text)]" data-theme={config.theme}>
      {/* Sidebar */}
      <aside className={cn(
        "flex flex-col bg-[var(--surface)] border-r border-[var(--border)] transition-all duration-300 z-10 overflow-hidden",
        sidebarOpen ? "w-[300px] min-w-[300px]" : "w-0 min-w-0"
      )}>
        <div className="flex items-center gap-2 p-3 pl-4 border-b border-[var(--border)] shrink-0">
          <a href="/" className="flex-1 text-base font-semibold tracking-tight no-underline text-white hover:text-[var(--accent)]">
            Sankey<span className="text-[var(--accent)]">Loop</span>
          </a>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="flex items-center justify-center w-7 h-7 border border-[var(--border)] rounded-[var(--radius)] text-[var(--text3)] transition-colors hover:border-[var(--text2)] hover:text-[var(--text)]"
          >
            <Menu size={15} />
          </button>
        </div>

        <div className="flex-1 px-0 py-2 overflow-x-hidden overflow-y-auto scrollbar-thin">
          {/* Section: Save / Load */}
          <div className="border-b border-[var(--border)]">
            <div 
              className="flex items-center gap-2 px-3.5 py-2.5 cursor-pointer select-none text-[var(--text2)] text-[12px] font-medium tracking-wider uppercase hover:bg-[var(--surface2)] hover:text-[var(--text)]"
              onClick={() => toggleSection('save')}
            >
              <span>💾</span> Save / Load
              <ChevronRight size={10} className={cn("ml-auto transition-transform opacity-50", openSections.save && "rotate-90")} />
            </div>
            {openSections.save && (
              <div className="section-body">
                <div className="flex flex-wrap gap-2">
                  <input type="file" id="import-json" className="hidden" accept=".json" onChange={handleImport} />
                  <button className="btn" onClick={() => document.getElementById('import-json')?.click()}>
                    <Download size={14} /> Import JSON
                  </button>
                  <button className="btn btn-primary" onClick={handleExport}>
                    <Upload size={14} /> Export JSON
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Section: Theme */}
          <div className="border-b border-[var(--border)]">
            <div 
              className="flex items-center gap-2 px-3.5 py-2.5 cursor-pointer select-none text-[var(--text2)] text-[12px] font-medium tracking-wider uppercase hover:bg-[var(--surface2)] hover:text-[var(--text)]"
              onClick={() => toggleSection('theme')}
            >
              <span>🎨</span> Theme
              <ChevronRight size={10} className={cn("ml-auto transition-transform opacity-50", openSections.theme && "rotate-90")} />
            </div>
            {openSections.theme && (
              <div className="section-body">
                <div>
                  <label className="block mb-1 text-[11px] font-medium text-[var(--text2)]">UI Theme</label>
                  <div className="flex gap-1.5 radio-group">
                    <button 
                      className={cn("radio-btn", config.theme === 'light' && "active")}
                      onClick={() => updateConfig({ theme: 'light' })}
                    >
                      <Sun size={12} className="inline mr-1" /> Light
                    </button>
                    <button 
                      className={cn("radio-btn", config.theme === 'dark' && "active")}
                      onClick={() => updateConfig({ theme: 'dark' })}
                    >
                      <Moon size={12} className="inline mr-1" /> Dark
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block mb-1 text-[11px] font-medium text-[var(--text2)]">Diagram Background</label>
                  <div className="flex items-center gap-2">
                    <input 
                      type="color" 
                      value={config.bgColor} 
                      onChange={(e) => updateConfig({ bgColor: e.target.value })}
                      className="w-9 h-7 p-0.5 border border-[var(--border)] rounded-[var(--radius)] bg-[var(--surface2)] cursor-pointer"
                    />
                    <input 
                      type="text" 
                      value={config.bgColor} 
                      onChange={(e) => updateConfig({ bgColor: e.target.value })}
                      className="flex-1"
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-1 text-[11px] font-medium text-[var(--text2)]">Flow Orientation</label>
                  <div className="flex gap-1.5 radio-group">
                    <button 
                      className={cn("radio-btn", config.orientation === 'h' && "active")}
                      onClick={() => updateConfig({ orientation: 'h' })}
                    >
                      Horizontal
                    </button>
                    <button 
                      className={cn("radio-btn", config.orientation === 'v' && "active")}
                      onClick={() => updateConfig({ orientation: 'v' })}
                    >
                      Vertical
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-0.5">
                  <label className="text-[11px] font-medium text-[var(--text2)] cursor-pointer" htmlFor="flow-anim">Animate flows</label>
                  <label className="relative inline-flex cursor-pointer toggle-switch">
                    <input 
                      type="checkbox" 
                      id="flow-anim"
                      checked={animating}
                      onChange={(e) => setAnimating(e.target.checked)}
                      className="absolute w-0 h-0 opacity-0"
                    />
                    <span className={cn("w-[34px] h-[20px] rounded-[10px] transition-colors relative block", animating ? "bg-[var(--accent)]" : "bg-[var(--border)]")}>
                      <span className={cn("absolute top-[3px] left-[3px] w-[14px] h-[14px] bg-white rounded-full transition-transform shadow-sm", animating && "translate-x-[14px]")} />
                    </span>
                  </label>
                </div>
                {animating && (
                  <div>
                    <label className="block mb-1 text-[11px] font-medium text-[var(--text2)]">
                      Speed <span className="float-right font-mono text-[11px] text-[var(--text2)]">{animSpeed}s</span>
                    </label>
                    <input 
                      type="range" 
                      min="1" max="8" step="0.5" 
                      value={animSpeed} 
                      onChange={(e) => setAnimSpeed(parseFloat(e.target.value))}
                      className="w-full"
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Section: Thermal Gradient */}
          <div className="border-b border-[var(--border)]">
            <div 
              className="flex items-center gap-2 px-3.5 py-2.5 cursor-pointer select-none text-[var(--text2)] text-[12px] font-medium tracking-wider uppercase hover:bg-[var(--surface2)] hover:text-[var(--text)]"
              onClick={() => toggleSection('thermal')}
            >
              <span>🔥</span> Thermal Gradient
              <ChevronRight size={10} className={cn("ml-auto transition-transform opacity-50", openSections.thermal && "rotate-90")} />
            </div>
            {openSections.thermal && (
              <div className="section-body">
                <div 
                  className="h-3 mb-2 border border-[var(--border)] rounded-sm"
                  style={{
                    background: `linear-gradient(to right, ${config.coldLowCol}, ${config.coldHighCol}, ${config.hotLowCol}, ${config.hotHighCol})`
                  }}
                />
                
                <div className="grid grid-cols-2 gap-x-2.5 gap-y-3 items-center">
                  {/* Row 1: High | Hot High */}
                  <div>
                    <label className="block mb-1 text-[11px] font-medium text-[var(--text2)]">High</label>
                    <input type="number" value={config.highVal} onChange={e => updateConfig({ highVal: parseInt(e.target.value) || 0 })} className="w-full" />
                  </div>
                  <div>
                    <label className="block mb-1 text-[11px] font-medium text-[var(--text2)]">Hot High</label>
                    <div className="flex gap-1">
                      <input type="color" value={config.hotHighCol} onChange={e => updateConfig({ hotHighCol: e.target.value })} className="w-8 h-7 p-0.5" />
                      <input type="text" value={config.hotHighCol} onChange={e => updateConfig({ hotHighCol: e.target.value })} className="flex-1 min-w-0 px-1 text-[10px]" />
                    </div>
                  </div>

                  {/* Row 2: Switch | Hot Low */}
                  <div>
                    <label className="block mb-1 text-[11px] font-medium text-[var(--text2)]">Switch</label>
                    <input type="number" value={config.midVal} onChange={e => updateConfig({ midVal: parseInt(e.target.value) || 0 })} className="w-full" />
                  </div>
                  <div>
                    <label className="block mb-1 text-[11px] font-medium text-[var(--text2)]">Hot Low</label>
                    <div className="flex gap-1">
                      <input type="color" value={config.hotLowCol} onChange={e => updateConfig({ hotLowCol: e.target.value })} className="w-8 h-7 p-0.5" />
                      <input type="text" value={config.hotLowCol} onChange={e => updateConfig({ hotLowCol: e.target.value })} className="flex-1 min-w-0 px-1 text-[10px]" />
                    </div>
                  </div>

                  {/* Row 3: Spacer | Cold High */}
                  <div />
                  <div>
                    <label className="block mb-1 text-[11px] font-medium text-[var(--text2)]">Cold High</label>
                    <div className="flex gap-1">
                      <input type="color" value={config.coldHighCol} onChange={e => updateConfig({ coldHighCol: e.target.value })} className="w-8 h-7 p-0.5" />
                      <input type="text" value={config.coldHighCol} onChange={e => updateConfig({ coldHighCol: e.target.value })} className="flex-1 min-w-0 px-1 text-[10px]" />
                    </div>
                  </div>

                  {/* Row 4: Low | Cold Low */}
                  <div>
                    <label className="block mb-1 text-[11px] font-medium text-[var(--text2)]">Low</label>
                    <input type="number" value={config.lowVal} onChange={e => updateConfig({ lowVal: parseInt(e.target.value) || 0 })} className="w-full" />
                  </div>
                  <div>
                    <label className="block mb-1 text-[11px] font-medium text-[var(--text2)]">Cold Low</label>
                    <div className="flex gap-1">
                      <input type="color" value={config.coldLowCol} onChange={e => updateConfig({ coldLowCol: e.target.value })} className="w-8 h-7 p-0.5" />
                      <input type="text" value={config.coldLowCol} onChange={e => updateConfig({ coldLowCol: e.target.value })} className="flex-1 min-w-0 px-1 text-[10px]" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block mb-1 text-[11px] font-medium text-[var(--text2)]">Gradient Unit</label>
                  <input type="text" value={config.gradUnit} onChange={e => updateConfig({ gradUnit: e.target.value })} className="w-20" />
                </div>
              </div>
            )}
          </div>

          {/* Section: Visual Geometry */}
          <div className="border-b border-[var(--border)]">
            <div 
              className="flex items-center gap-2 px-3.5 py-2.5 cursor-pointer select-none text-[var(--text2)] text-[12px] font-medium tracking-wider uppercase hover:bg-[var(--surface2)] hover:text-[var(--text)]"
              onClick={() => toggleSection('visual')}
            >
              <span>📏</span> Visual Geometry
              <ChevronRight size={10} className={cn("ml-auto transition-transform opacity-50", openSections.visual && "rotate-90")} />
            </div>
            {openSections.visual && (
              <div className="section-body">
                <div>
                  <label className="block mb-1 text-[11px] font-medium text-[var(--text2)]">
                    Node Pad (Gap) <span className="float-right font-mono">{activeScenario.nodeSpacing ?? config.nodeSpacing}</span>
                  </label>
                  <input type="range" min="0" max="200" value={activeScenario.nodeSpacing ?? config.nodeSpacing} onChange={e => {
                    const val = parseInt(e.target.value);
                    setScenarios(prev => ({
                      ...prev,
                      [viewScenario]: { ...prev[viewScenario], nodeSpacing: val }
                    }));
                  }} className="w-full" />
                </div>
                <div>
                  <label className="block mb-1 text-[11px] font-medium text-[var(--text2)]">
                    Node Width <span className="float-right font-mono">{config.nodeThickness}</span>
                  </label>
                  <input type="range" min="5" max="50" value={config.nodeThickness} onChange={e => updateConfig({ nodeThickness: parseInt(e.target.value) })} className="w-full" />
                </div>
                <div>
                  <label className="block mb-1 text-[11px] font-medium text-[var(--text2)]">
                    Link Opacity <span className="float-right font-mono">{config.linkOpacity.toFixed(2)}</span>
                  </label>
                  <input type="range" min="0.05" max="1" step="0.05" value={config.linkOpacity} onChange={e => updateConfig({ linkOpacity: parseFloat(e.target.value) })} className="w-full" />
                </div>
                <div>
                  <label className="block mb-1 text-[11px] font-medium text-[var(--text2)]">
                    Arrow Head <span className="float-right font-mono">{config.arrowSize}</span>
                  </label>
                  <input type="range" min="0" max="50" value={config.arrowSize} onChange={e => updateConfig({ arrowSize: parseInt(e.target.value) })} className="w-full" />
                </div>
              </div>
            )}
          </div>
          <div className="border-b border-[var(--border)]">
            <div 
              className="flex items-center gap-2 px-3.5 py-2.5 cursor-pointer select-none text-[var(--text2)] text-[12px] font-medium tracking-wider uppercase hover:bg-[var(--surface2)] hover:text-[var(--text)]"
              onClick={() => toggleSection('layout')}
            >
              <span>📐</span> Layout & Scaling
              <ChevronRight size={10} className={cn("ml-auto transition-transform opacity-50", openSections.layout && "rotate-90")} />
            </div>
            {openSections.layout && (
              <div className="section-body">
                <div>
                  <label className="block mb-1 text-[11px] font-medium text-[var(--text2)]">Aspect Ratio</label>
                  <select 
                    value={config.aspectRatio || 'fit'} 
                    onChange={(e) => updateConfig({ aspectRatio: e.target.value as any })}
                    className="w-full text-[11px] px-2 py-1 rounded bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] focus:outline-none focus:border-[var(--accent)]"
                  >
                    <option value="fit">Fit to Space</option>
                    <option value="16:9">16:9</option>
                    <option value="4:3">4:3</option>
                    <option value="1:1">1:1</option>
                    <option value="custom">Custom (uses width/height)</option>
                  </select>
                </div>
                
                {config.aspectRatio === 'custom' && (
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[9.5px] mb-1 font-medium text-[var(--text3)] uppercase">Width (px)</label>
                      <input 
                        type="number" 
                        value={config.figWidth} 
                        onChange={(e) => updateConfig({ figWidth: Number(e.target.value) })}
                        className="w-full bg-[var(--surface)] p-1 text-[11px] rounded border border-[var(--border)] text-[var(--text)]"
                      />
                    </div>
                    <div>
                      <label className="block text-[9.5px] mb-1 font-medium text-[var(--text3)] uppercase">Height (px)</label>
                      <input 
                        type="number" 
                        value={config.figHeight} 
                        onChange={(e) => updateConfig({ figHeight: Number(e.target.value) })}
                        className="w-full bg-[var(--surface)] p-1 text-[11px] rounded border border-[var(--border)] text-[var(--text)]"
                      />
                    </div>
                  </div>
                )}

                <div className={config.aspectRatio === 'custom' ? "mt-4" : ""}>
                  <label className="block mb-1 text-[11px] font-medium text-[var(--text2)]">Node Alignment</label>
                  <div className="flex gap-1 radio-group">
                    {['justify', 'left', 'center', 'right'].map((align) => (
                      <button 
                        key={align}
                        className={cn("radio-btn", config.nodeAlignment === align && "active")}
                        onClick={() => updateConfig({ nodeAlignment: align as any })}
                      >
                        {align.charAt(0).toUpperCase() + align.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block mb-1 text-[11px] font-medium text-[var(--text2)]">Arrangement</label>
                  <select 
                    value={config.nodeArrangement} 
                    onChange={e => updateConfig({ nodeArrangement: e.target.value as any })}
                    className="w-full"
                  >
                    <option value="snap">Snap</option>
                    <option value="perpendicular">Perpendicular</option>
                    <option value="freeform">Freeform</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Section: Typography & Canvas */}
          <div className="border-b border-[var(--border)]">
            <div 
              className="flex items-center gap-2 px-3.5 py-2.5 cursor-pointer select-none text-[var(--text2)] text-[12px] font-medium tracking-wider uppercase hover:bg-[var(--surface2)] hover:text-[var(--text)]"
              onClick={() => toggleSection('typography')}
            >
              <span>🖋️</span> Typography & Canvas
              <ChevronRight size={10} className={cn("ml-auto transition-transform opacity-50", openSections.typography && "rotate-90")} />
            </div>
            {openSections.typography && (
              <div className="section-body">
                <div>
                  <label className="block mb-1 text-[11px] font-medium text-[var(--text2)]">
                    Font Size <span className="float-right font-mono">{config.labelSize}</span>
                  </label>
                  <input type="range" min="8" max="30" value={config.labelSize} onChange={e => updateConfig({ labelSize: parseInt(e.target.value) })} className="w-full" />
                </div>
                <div>
                  <label className="block mb-1 text-[11px] font-medium text-[var(--text2)]">
                    Font Color
                  </label>
                  <div className="flex gap-2">
                    <input type="color" value={config.labelColor} onChange={e => updateConfig({ labelColor: e.target.value })} className="w-9 h-7 p-0.5 border border-[var(--border)] rounded-[var(--radius)]" />
                    <input type="text" value={config.labelColor} onChange={e => updateConfig({ labelColor: e.target.value })} className="flex-1" />
                  </div>
                </div>
                <div>
                  <label className="block mb-1 text-[11px] font-medium text-[var(--text2)]">Value Unit</label>
                  <input type="text" value={config.valueUnit} onChange={e => updateConfig({ valueUnit: e.target.value })} className="w-full" />
                </div>
              </div>
            )}
          </div>

          {/* Section: Node Colors */}
          <div className="border-b border-[var(--border)]">
            <div 
              className="flex items-center gap-2 px-3.5 py-2.5 cursor-pointer select-none text-[var(--text2)] text-[12px] font-medium tracking-wider uppercase hover:bg-[var(--surface2)] hover:text-[var(--text)]"
              onClick={() => toggleSection('nodes')}
            >
              <span>🟣</span> Node Colors
              <ChevronRight size={10} className={cn("ml-auto transition-transform opacity-50", openSections.nodes && "rotate-90")} />
            </div>
            {openSections.nodes && (
              <div className="section-body">
                <div>
                  <label className="block mb-1 text-[11px] font-medium text-[var(--text2)]">Default Node Color</label>
                  <input type="color" value={config.defaultNodeColor} onChange={e => updateConfig({ defaultNodeColor: e.target.value })} className="w-full h-7" />
                </div>
                <div className="mt-2 data-table-wrap max-h-[300px] border border-[var(--border)] rounded-[var(--radius)] overflow-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-[var(--surface2)] sticky top-0">
                        <th className="p-1.5 text-left font-medium text-[var(--text2)]">Node</th>
                        <th className="p-1.5 text-left font-medium text-[var(--text2)]">Color</th>
                      </tr>
                    </thead>
                    <tbody>
                      {labels.map(l => (
                        <tr key={l} className="border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--bg)]">
                          <td className="p-1.5 truncate max-w-[100px]" title={l}>{l}</td>
                          <td className="p-1.5">
                            <input 
                              type="text" 
                              value={editScenarioData.nodeColorOverrides[l] || ''} 
                              placeholder={config.defaultNodeColor}
                              onChange={e => {
                                const overrides = { ...editScenarioData.nodeColorOverrides, [l]: e.target.value };
                                updateScenario(editScenario, { nodeColorOverrides: overrides });
                              }}
                              className="w-full p-1"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="relative flex flex-col flex-1 min-w-0 overflow-hidden">
        {!sidebarOpen && (
          <button 
            onClick={() => setSidebarOpen(true)}
            className="fixed top-0 left-0 flex flex-col items-center justify-center w-11 h-11 border border-l-0 border-[var(--border)] bg-[var(--surface)] z-20 rounded-br-[var(--radius)] text-[var(--text3)] shadow-md transition-colors hover:text-[var(--text)] hover:bg-[var(--surface2)]"
          >
            <Menu size={16} />
          </button>
        )}

        {/* Data Section */}
        <div 
          className="flex flex-col flex-shrink-0 overflow-hidden bg-[var(--surface)] text-[var(--text)] border-b border-[var(--border)]"
          style={{ height: dataSectionOpen ? dataSectionHeight : 40 }}
        >
          <div 
            className="flex items-center gap-2 p-2 px-4 border-b border-[var(--border)] bg-[var(--surface2)] cursor-pointer shrink-0 transition-colors hover:bg-[var(--border)]"
            onClick={() => setDataSectionOpen(!dataSectionOpen)}
          >
            <ChevronRight size={10} className={cn("text-[var(--text3)] transition-transform", dataSectionOpen && "rotate-90")} />
            <span className="text-base">📊</span>
            <span className="text-[12px] font-semibold tracking-wider text-[var(--text2)] uppercase">Flow Data</span>
            
            <div className="flex ml-auto gap-0 border border-[var(--border)] rounded-[var(--radius)] overflow-hidden" onClick={e => e.stopPropagation()}>
              <button 
                className={cn("px-3.5 py-1 text-[11.5px] font-medium transition-all", inputMode === 'table' ? "bg-[var(--accent)] text-white" : "bg-[var(--surface2)] text-[var(--text2)] hover:text-[var(--text)]")}
                onClick={() => setInputMode('table')}
              >
                Table
              </button>
              <button 
                className={cn("px-3.5 py-1 text-[11.5px] font-medium border-l border-[var(--border)] transition-all", inputMode === 'text' ? "bg-[var(--accent)] text-white" : "bg-[var(--surface2)] text-[var(--text2)] hover:text-[var(--text)]")}
                onClick={() => setInputMode('text')}
              >
                Text
              </button>
              <button 
                className={cn("px-3.5 py-1 text-[11.5px] font-medium border-l border-[var(--border)] transition-all", inputMode === 'guided' ? "bg-[var(--accent)] text-white" : "bg-[var(--surface2)] text-[var(--text2)] hover:text-[var(--text)]")}
                onClick={() => setInputMode('guided')}
              >
                Guided
              </button>
            </div>
          </div>

          {dataSectionOpen && (
            <div className="flex flex-col flex-1 min-h-0">
               {/* Scenario Tabs */}
              {inputMode !== 'guided' && (
                <div className="flex bg-[var(--surface)] border-b border-[var(--border)] shrink-0">
                  <button 
                    className={cn("flex-1 px-3 py-2 text-xs font-semibold text-center border-r border-b-2 transition-all border-[var(--border)]", editScenario === 'before' ? "text-[var(--text)] bg-[var(--surface)] border-b-[var(--accent)]" : "text-[var(--text2)] bg-[var(--surface2)] border-b-transparent hover:text-[var(--text)]")}
                    onClick={() => setEditScenario('before')}
                  >
                    ✏️ Before
                  </button>
                  <button 
                    className={cn("flex-1 px-3 py-2 text-xs font-semibold text-center border-b-2 transition-all border-[var(--border)]", editScenario === 'after' ? "text-[var(--text)] bg-[var(--surface)] border-b-[#22c55e]" : "text-[var(--text2)] bg-[var(--surface2)] border-b-transparent hover:text-[var(--text)]")}
                    onClick={() => setEditScenario('after')}
                  >
                    ✏️ After
                  </button>
                </div>
              )}

              <div className={cn("flex-1 overflow-y-auto", inputMode !== 'guided' && "p-4")}>
                {inputMode === 'guided' ? (
                  <GuidedSetup onGenerate={(before, after) => {
                    setScenarios(s => ({
                      ...s,
                      before: { ...s.before, flows: before.length > 0 ? before : [{ Source: '', Target: '', Value: '', Color: '' }] },
                      after: { ...s.after, flows: after.length > 0 ? after : [{ Source: '', Target: '', Value: '', Color: '' }] }
                    }));
                    setInputMode('table');
                  }} />
                ) : inputMode === 'table' ? (
                  <div className="flex flex-col gap-2">
                    <span className="text-[10.5px] italic text-[var(--text3)]">Paste Excel cells · Drag to select</span>
                    <div className="border border-[var(--border)] rounded-[var(--radius)] overflow-auto data-table-wrap">
                      <table className="w-full text-[11.5px] border-collapse">
                        <thead className="sticky top-0 z-10">
                          <tr className="bg-[var(--surface2)]">
                            <th className="p-1 px-2 text-left font-medium text-[var(--text2)] text-[10.5px] uppercase tracking-wider border-b border-[var(--border)]">Source</th>
                            <th className="p-1 px-2 text-left font-medium text-[var(--text2)] text-[10.5px] uppercase tracking-wider border-b border-[var(--border)]">Target</th>
                            <th className="p-1 px-2 text-left font-medium text-[var(--text2)] text-[10.5px] uppercase tracking-wider border-b border-[var(--border)]">Value</th>
                            <th className="p-1 px-2 text-left font-medium text-[var(--text2)] text-[10.5px] uppercase tracking-wider border-b border-[var(--border)]">Color</th>
                            <th className="p-1 px-2 text-center border-b border-[var(--border)]">
                              <button 
                                onClick={clearAllFlows}
                                className="px-1.5 py-0.5 border border-red-500 rounded text-[10px] font-semibold text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                              >
                                Clear
                              </button>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {editScenarioData.flows.map((flow, i) => (
                            <tr key={i} className="hover:bg-[var(--surface2)] border-b border-[var(--border)] last:border-b-0">
                              <td className="p-0"><input type="text" value={flow.Source} onPaste={e => handleTablePaste(e, i, 'Source')} onChange={e => handleFlowChange(i, 'Source', e.target.value)} className="w-full border-transparent bg-transparent focus:bg-[var(--surface)] p-1" /></td>
                              <td className="p-0"><input type="text" value={flow.Target} onPaste={e => handleTablePaste(e, i, 'Target')} onChange={e => handleFlowChange(i, 'Target', e.target.value)} className="w-full border-transparent bg-transparent focus:bg-[var(--surface)] p-1" /></td>
                              <td className="p-0"><input type="text" value={flow.Value} onPaste={e => handleTablePaste(e, i, 'Value')} onChange={e => handleFlowChange(i, 'Value', e.target.value)} className="w-full border-transparent bg-transparent focus:bg-[var(--surface)] p-1" /></td>
                              <td className="p-0"><input type="text" value={flow.Color} onPaste={e => handleTablePaste(e, i, 'Color')} onChange={e => handleFlowChange(i, 'Color', e.target.value)} className="w-full border-transparent bg-transparent focus:bg-[var(--surface)] p-1" /></td>
                              <td className="p-1 text-center">
                                {(i !== editScenarioData.flows.length - 1 || flow.Source) && (
                                  <button onClick={() => deleteFlow(i)} className="text-[var(--text3)] hover:text-[var(--danger)] text-lg">×</button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-1.5 h-full">
                    <span className="text-[10.5px] italic text-[var(--text3)]">Format: <code className="font-mono">Source [Value] Target Color</code> — one per line</span>
                    <textarea 
                      className="flex-1 w-full p-2 font-mono text-xs resize-none min-h-[150px]"
                      value={editScenarioData.flows.map(f => `${f.Source} [${f.Value}] ${f.Target} ${f.Color}`.trim()).join('\n')}
                      onChange={e => {
                        const lines = e.target.value.split('\n');
                        const newFlows = lines.map(line => {
                          const m = line.match(/^(.+?)\s*\[(.+?)\]\s*(.+?)(?:\s+(\S+))?$/);
                          if (m) return { Source: m[1].trim(), Value: m[2].trim(), Target: m[3].trim(), Color: (m[4] || '').trim() };
                          return { Source: '', Target: '', Value: '', Color: '' };
                        }).filter(f => f.Source || f.Target || f.Value);
                        if (newFlows.length === 0) newFlows.push({ Source: '', Target: '', Value: '', Color: '' });
                        updateScenario(editScenario, { flows: newFlows });
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
 
        {/* Resize Handle */}
        {dataSectionOpen && (
          <div 
            onMouseDown={handleDataSectionResizeStart}
            className="h-[6px] -mt-[3px] bg-transparent hover:bg-[var(--accent)]/50 cursor-ns-resize shrink-0 transition-colors relative z-10 hidden md:block group"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1 rounded-full bg-[var(--border)] group-hover:bg-[var(--accent)] transition-colors shadow-sm" />
          </div>
        )}
         <div className="flex border-b border-[var(--border)] shrink-0 bg-[var(--surface)] p-2">
           <div className="flex flex-col gap-1 w-full relative">
             <div className="flex items-center gap-2.5 px-2">
               <span className="text-[11px] font-medium text-[var(--text3)]">Viewing:</span>
               
               <div className="flex flex-col items-center">
                 <button 
                   className={cn(
                     "px-3.5 py-1 text-xs font-semibold rounded-[var(--radius)] border border-[var(--border)] transition-all",
                     viewScenario === 'before' ? "bg-[var(--accent)] border-[var(--accent)] text-white" : "bg-[var(--surface2)] text-[var(--text2)] hover:border-[var(--text2)] hover:text-[var(--text)]"
                   )}
                   onClick={() => setViewScenario('before')}
                 >
                   Before
                 </button>
                 {renderedPPUs.before && (
                   <span className="text-[9px] text-[var(--text3)] font-mono mt-1">{renderedPPUs.before.toFixed(2)} px/{config.valueUnit}</span>
                 )}
               </div>

               <div className="flex flex-col items-center">
                 <button 
                   className={cn(
                     "px-3.5 py-1 text-xs font-semibold rounded-[var(--radius)] border border-[var(--border)] transition-all",
                     viewScenario === 'after' ? "bg-[#22c55e] border-[#22c55e] text-white" : "bg-[var(--surface2)] text-[var(--text2)] hover:border-[var(--text2)] hover:text-[var(--text)]"
                   )}
                   onClick={() => setViewScenario('after')}
                 >
                   After
                 </button>
                 {renderedPPUs.after && (
                   <span className="text-[9px] text-[var(--text3)] font-mono mt-1">{renderedPPUs.after.toFixed(2)} px/{config.valueUnit}</span>
                 )}
               </div>

               <div className="flex items-center ml-2 pl-3 border-l border-[var(--border)] gap-2">
                 <span className="text-[11px] font-medium text-[var(--text2)]">Sync views</span>
                 <button 
                   onClick={toggleSyncViews}
                   className={cn(
                     "relative inline-flex h-4 w-7 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                     isViewsSynced ? "bg-[#22c55e]" : "bg-[var(--border)]"
                   )}
                 >
                   <span 
                     className={cn(
                       "pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                       isViewsSynced ? "translate-x-3" : "translate-x-0"
                     )}
                   />
                 </button>
               </div>

               <div className="ml-auto flex items-center pr-2">
                 <button 
                   onClick={resetLayout}
                   className="flex items-center gap-1 py-1 px-2.5 border border-[var(--border)] bg-[var(--surface2)] rounded-[var(--radius)] text-[11px] font-medium text-[var(--text2)] transition-colors hover:border-[var(--text2)] hover:text-[var(--text)]"
                 >
                   <RotateCcw size={13} /> Reset Layout
                 </button>
               </div>
             </div>
           </div>
         </div>
  
         {/* Diagram Area */}
         <div className="relative flex-1 flex flex-col min-h-0 min-w-0 overflow-hidden bg-[var(--bg)] scrollbar-hide">
           <div className="relative flex-1 min-h-0 min-w-0 p-4">
             {(['before', 'after'] as const).map(scenarioKey => (
               <div 
                 key={scenarioKey}
                 className={cn(
                   "absolute inset-0 p-4 transition-opacity duration-300",
                   viewScenario === scenarioKey ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                 )}
               >
                 <SankeyDiagram 
                   scenario={scenarios[scenarioKey]}
                   config={config}
                   onNodeDrag={handleNodeDrag}
                   animating={animating && viewScenario === scenarioKey}
                   animSpeed={animSpeed}
                   onRenderedPPU={(val) => {
                     setRenderedPPUs(prev => {
                       if (prev[scenarioKey] === null) return { ...prev, [scenarioKey]: val };
                       if (Math.abs(prev[scenarioKey]! - val) > 0.01) return { ...prev, [scenarioKey]: val };
                       return prev;
                     });
                   }}
                   onRenderedPositions={(pos) => {
                     setScenarios(prev => {
                       const currentPosStr = JSON.stringify(prev[scenarioKey].nativePositions || {});
                       const newPosStr = JSON.stringify(pos || {});
                       if (currentPosStr === newPosStr) return prev;
                       return {
                         ...prev,
                         [scenarioKey]: { ...prev[scenarioKey], nativePositions: pos }
                       };
                     });
                   }}
                 />
               </div>
             ))}
           </div>
         </div>
 
         {/* Download Bar */}
         <div className="flex items-center gap-2 p-1.5 px-3 border-t border-[var(--border)] bg-[var(--surface)] shrink-0">
           <span className="text-[11px] text-[var(--text3)]">Export:</span>
           <button className="px-3 py-1 btn" style={{ fontSize: '11px' }} onClick={() => exportImage('png')}><Download size={13} /> PNG</button>
           <button className="px-3 py-1 btn" style={{ fontSize: '11px' }} onClick={() => exportImage('svg')}><Download size={13} /> SVG</button>
           <div className="w-px h-4 mx-1 bg-[var(--border)]" />
           <button 
             className="px-3 py-1 btn" 
             style={{ fontSize: '11px' }}
             onClick={exportTransitionVideo}
             disabled={exportingVideo}
           >
             <Video size={13} /> {exportingVideo ? `Exporting (${videoProgress}%)` : 'Transition Video'}
           </button>
         </div>
 
         {exportingVideo && (
           <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
             <div className="text-white font-medium mb-4">Generating Video...</div>
             <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
               <div 
                 className="h-full bg-[var(--accent)] transition-all duration-300"
                 style={{ width: `${videoProgress}%` }}
               />
             </div>
             <div className="text-white/60 text-xs mt-2">{videoProgress}% Complete</div>
             <div className="text-white/70 text-sm mt-3">This may take a minute</div>
           </div>
         )}

        {gifPreviewUrl && (
          <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm p-8">
            <div className="bg-[var(--surface)] p-6 rounded-xl shadow-2xl max-w-4xl w-full flex flex-col items-center">
              <h3 className="text-[var(--text)] text-xl font-medium mb-4">Transition Preview</h3>
              <div className="bg-[var(--surface2)] rounded mb-6 border border-[var(--border)] overflow-hidden w-full flex justify-center">
                <img 
                  src={gifPreviewUrl} 
                  alt="Transition Preview" 
                  className="max-h-[60vh] object-contain"
                  style={{ backgroundColor: config.bgColor || '#ffffff' }}
                />
              </div>
              <div className="flex gap-4">
                <button 
                  className="px-6 py-2 rounded font-medium border border-[var(--border)] text-[var(--text2)] hover:bg-[var(--surface2)] hover:text-[var(--text)] transition-colors"
                  onClick={() => {
                    URL.revokeObjectURL(gifPreviewUrl);
                    setGifPreviewUrl(null);
                  }}
                >
                  Cancel
                </button>
                <a 
                  href={gifPreviewUrl}
                  download="sankey_transition.gif"
                  className="px-6 py-2 rounded font-medium bg-[#3b7fd4] text-white hover:opacity-90 flex items-center gap-2 transition-colors"
                  onClick={() => {
                    setTimeout(() => {
                      URL.revokeObjectURL(gifPreviewUrl);
                      setGifPreviewUrl(null);
                    }, 500);
                  }}
                >
                  <Download size={16} /> Download GIF
                </a>
              </div>
              
              {videoDebugInfo.length > 0 && (
                <details className="w-full mt-6 text-xs text-[var(--text2)]">
                  <summary className="cursor-pointer font-medium mb-2 p-1 hover:bg-[var(--surface2)] rounded max-w-fit">Frame information</summary>
                  <div className="max-h-48 overflow-y-auto border border-[var(--border)] rounded bg-[var(--surface2)]">
                    <table className="w-full text-right p-2">
                      <thead className="sticky top-0 bg-[var(--surface)] shadow-sm">
                        <tr>
                          <th className="p-1 font-semibold border-b border-[var(--border)]">Frame</th>
                          <th className="p-1 font-semibold border-b border-[var(--border)]">PPU_n</th>
                          <th className="p-1 font-semibold border-b border-[var(--border)]">NP_n</th>
                          <th className="p-1 font-semibold border-b border-[var(--border)]">x</th>
                          <th className="p-1 font-semibold border-b border-[var(--border)]">target</th>
                          <th className="p-1 font-semibold border-b border-[var(--border)]">NP_corrected</th>
                          <th className="p-1 font-semibold border-b border-[var(--border)]">PPU_after</th>
                        </tr>
                      </thead>
                      <tbody>
                        {videoDebugInfo.map(info => (
                          <tr key={info.frame} className="hover:bg-[var(--surface)]">
                            <td className="p-1 border-b border-[var(--border)]">{info.frame}</td>
                            <td className="p-1 border-b border-[var(--border)]">{info.ppu_n.toFixed(2)}</td>
                            <td className="p-1 border-b border-[var(--border)]">{info.np_n.toFixed(1)}</td>
                            <td className="p-1 border-b border-[var(--border)]">{info.x.toFixed(3)}</td>
                            <td className="p-1 border-b border-[var(--border)]">{info.target.toFixed(1)}</td>
                            <td className="p-1 border-b border-[var(--border)]">{info.np_corrected.toFixed(1)}</td>
                            <td className="p-1 border-b border-[var(--border)]">{info.ppu_after.toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </details>
              )}
            </div>
          </div>
        )}
       </main>
     </div>
   );
 }
