import { Config, Flow } from '../types';
import { NAMED_COLORS } from '../constants';

export function hexToRgb(hex: string) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  const n = parseInt(hex, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function interpolateRgb(v: number, minV: number, maxV: number, col1: string, col2: string, opacity: number) {
  if (maxV === minV) {
    const [r, g, b] = hexToRgb(col1);
    return `rgba(${r},${g},${b},${opacity})`;
  }
  const f = Math.max(0, Math.min(1, (v - minV) / (maxV - minV)));
  const [r1, g1, b1] = hexToRgb(col1);
  const [r2, g2, b2] = hexToRgb(col2);
  return `rgba(${Math.round(r1 + (r2 - r1) * f)},${Math.round(g1 + (g2 - g1) * f)},${Math.round(b1 + (b2 - b1) * f)},${opacity})`;
}

export function getLinkColor(colorVal: string | number, cfg: Config, opacityOverride?: number) {
  const opacity = opacityOverride !== undefined ? opacityOverride : cfg.linkOpacity;
  if (!colorVal && colorVal !== 0) return `rgba(150,150,150,${opacity})`;
  const s = String(colorVal).trim().toLowerCase();
  if (s === 'elec') return `rgba(0,200,0,${opacity})`;
  if (s === 'black') return `rgba(0,0,0,${opacity})`;
  if (s.startsWith('#')) {
    try {
      const [r, g, b] = hexToRgb(s);
      return `rgba(${r},${g},${b},${opacity})`;
    } catch {
      return `rgba(150,150,150,${opacity})`;
    }
  }
  const v = parseFloat(s);
  if (isNaN(v)) return `rgba(150,150,150,${opacity})`;
  const { highVal, midVal, lowVal, hotHighCol, hotLowCol, coldHighCol, coldLowCol } = cfg;
  if (v >= midVal) return interpolateRgb(v, midVal, highVal, hotLowCol, hotHighCol, opacity);
  return interpolateRgb(v, lowVal, midVal, coldLowCol, coldHighCol, opacity);
}

export function resolveNodeColor(s: string | undefined, fallback: string) {
  if (!s) return fallback;
  const low = s.trim().toLowerCase();
  if (low.startsWith('#') && (low.length === 4 || low.length === 7)) return s.trim().toUpperCase();
  return NAMED_COLORS[low] || fallback;
}

export function buildSankeyData(flows: Flow[], cfg: Config) {
  const labels: string[] = [],
    l2i: Record<string, number> = {},
    src: number[] = [],
    tgt: number[] = [],
    val: number[] = [],
    linkColors: string[] = [],
    isGhost: boolean[] = [],
    warnings: string[] = [];

  flows.forEach(row => {
    let source = String(row.Source || '').trim();
    let target = String(row.Target || '').trim();
    if (!source || !target) return;
    const parsed = parseFloat(String(row.Value || '').replace(',', '.'));
    if (isNaN(parsed)) {
      warnings.push(`⚠️ Cannot parse value "${row.Value}" for ${source} → ${target}`);
      return;
    }
    let v2 = parsed;
    if (v2 < 0) {
      [source, target, v2] = [target, source, Math.abs(v2)];
    }
    const ghost = (v2 === 0);
    for (const n of [source, target]) {
      if (!(n in l2i)) {
        l2i[n] = labels.length;
        labels.push(n);
      }
    }
    src.push(l2i[source]);
    tgt.push(l2i[target]);
    val.push(ghost ? 0.001 : v2);
    isGhost.push(ghost);
    linkColors.push(getLinkColor(row.Color, cfg, ghost ? cfg.ghostOpacity : undefined));
  });

  return { labels, src, tgt, val, linkColors, isGhost, warnings };
}

export function computeAlignedX(src: number[], tgt: number[], val: number[], labels: string[], alignment: string) {
  const N = labels.length;
  const minDepth = new Array(N).fill(Infinity);
  const maxDepth = new Array(N).fill(-Infinity);

  const outEdges: number[][] = Array.from({ length: N }, () => []);
  const inEdges: number[][] = Array.from({ length: N }, () => []);
  src.forEach((s, i) => {
    outEdges[s].push(tgt[i]);
    inEdges[tgt[i]].push(s);
  });

  const sources = labels.map((_, i) => i).filter(i => inEdges[i].length === 0);

  const queue = [...sources];
  sources.forEach(s => {
    minDepth[s] = 0;
  });
  while (queue.length) {
    const cur = queue.shift()!;
    outEdges[cur].forEach(next => {
      if (minDepth[cur] + 1 < minDepth[next]) {
        minDepth[next] = minDepth[cur] + 1;
        queue.push(next);
      }
    });
  }
  for (let i = 0; i < N; i++) if (minDepth[i] === Infinity) minDepth[i] = 0;

  const sinks = labels.map((_, i) => i).filter(i => outEdges[i].length === 0);
  const maxD = Math.max(...minDepth);
  if (maxD === 0) return labels.map(() => 0.5);

  sinks.forEach(s => {
    maxDepth[s] = maxD;
  });
  const queue2 = [...sinks];
  while (queue2.length) {
    const cur = queue2.shift()!;
    inEdges[cur].forEach(prev => {
      if (maxDepth[cur] - 1 > maxDepth[prev]) {
        maxDepth[prev] = maxDepth[cur] - 1;
        queue2.push(prev);
      }
    });
  }
  for (let i = 0; i < N; i++) if (maxDepth[i] === -Infinity) maxDepth[i] = maxD;

  const cols = alignment === 'left' ? minDepth
    : alignment === 'right' ? maxDepth
      : alignment === 'center' ? labels.map((_, i) => Math.round((minDepth[i] + maxDepth[i]) / 2))
        : minDepth;

  const colMax = Math.max(...cols, 1);
  return cols.map(c => 0.01 + (c / colMax) * 0.95);
}
