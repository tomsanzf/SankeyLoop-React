import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { Menu, Save, Upload, Download, RotateCcw, Video, Table as TableIcon, FileText, ChevronRight, Sun, Moon } from 'lucide-react';
import { Config, Scenario, Flow } from '../types';
import { DEFAULT_FLOWS } from '../constants';
import { SankeyDiagram } from '../components/SankeyDiagram';
import { cn } from '../lib/utils';
import { buildSankeyData } from '../lib/sankeyUtils';
import Plotly from 'plotly.js-dist-min';

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
  theme: 'dark',
  bgColor: '#ffffff',
};

const INITIAL_SCENARIO: Scenario = {
  flows: [...DEFAULT_FLOWS.map(f => ({ ...f }))],
  nodeColorOverrides: {},
  nodePositions: {},
  hasDraggedNodes: false,
};

export default function Editor() {
  const [config, setConfig] = useState<Config>(INITIAL_CONFIG);
  const [scenarios, setScenarios] = useState<{ before: Scenario; after: Scenario }>({
    before: { ...INITIAL_SCENARIO, flows: [...DEFAULT_FLOWS.map(f => ({ ...f }))] },
    after: { ...INITIAL_SCENARIO, flows: [...DEFAULT_FLOWS.map(f => ({ ...f }))] },
  });

  useEffect(() => {
    const saved = localStorage.getItem('sankeyloop_load_example');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.config) setConfig(prev => ({ ...prev, ...data.config }));
        if (data.flows) {
          setScenarios({
            before: { ...INITIAL_SCENARIO, flows: data.flows },
            after: { ...INITIAL_SCENARIO, flows: data.flows },
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
  const [inputMode, setInputMode] = useState<'table' | 'text'>('table');
  const [animating, setAnimating] = useState(false);
  const [animSpeed, setAnimSpeed] = useState(3);
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
    updateScenario(viewScenario, {
      nodePositions: positions,
      hasDraggedNodes: true,
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
    updateScenario(viewScenario, {
      nodePositions: {},
      hasDraggedNodes: false,
    });
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
            before: { ...INITIAL_SCENARIO, flows: data.flows },
            after: { ...INITIAL_SCENARIO, flows: data.flows },
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
      await Plotly.downloadImage(plotEl, {
        format,
        filename: 'sankeyloop',
        width: config.figWidth,
        height: config.figHeight,
      });
    } catch (err) {
      console.error('Export failed:', err);
    }
  };

  const [exportingVideo, setExportingVideo] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  const exportTransitionVideo = async () => {
    const nFrames = 10;
    const plotEl = document.querySelector('.js-plotly-plot') as any;
    if (!plotEl) return;

    setExportingVideo(true);
    setVideoProgress(0);

    const dataUrls: string[] = [];

    for (let f = 0; f < nFrames; f++) {
      const t = f / (nFrames - 1);
      setVideoProgress(Math.round((f / nFrames) * 100));
      
      try {
        const url = await Plotly.toImage(plotEl, { format: 'png', width: config.figWidth, height: config.figHeight });
        dataUrls.push(url);
      } catch (e) {
        console.error('Frame capture failed', e);
      }
      await new Promise(r => setTimeout(r, 100));
    }

    setVideoProgress(95);
    
    if (dataUrls.length > 0) {
      const canvas = document.createElement('canvas');
      canvas.width = config.figWidth;
      canvas.height = config.figHeight;
      const ctx = canvas.getContext('2d');
      const stream = canvas.captureStream(0);
      const recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
      const chunks: Blob[] = [];
      
      recorder.ondataavailable = e => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'sankey_transition.webm';
        a.click();
        URL.revokeObjectURL(url);
        setExportingVideo(false);
      };

      recorder.start();
      const track = stream.getVideoTracks()[0] as any;
      
      for (const url of dataUrls) {
        const img = new Image();
        img.src = url;
        await new Promise(r => img.onload = r);
        ctx?.drawImage(img, 0, 0);
        track.requestFrame();
        await new Promise(r => setTimeout(r, 500));
      }
      
      recorder.stop();
    } else {
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
    if (confirm(`Clear all ${editScenario} flows?`)) {
      updateScenario(editScenario, {
        flows: [{ Source: '', Target: '', Value: '', Color: '' }],
        nodeColorOverrides: {},
      });
    }
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
                    <Upload size={14} /> Import JSON
                  </button>
                  <button className="btn btn-primary" onClick={handleExport}>
                    <Save size={14} /> Export JSON
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
                    Node Pad (Gap) <span className="float-right font-mono">{config.nodeSpacing}</span>
                  </label>
                  <input type="range" min="0" max="200" value={config.nodeSpacing} onChange={e => updateConfig({ nodeSpacing: parseInt(e.target.value) })} className="w-full" />
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
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block mb-1 text-[11px] font-medium text-[var(--text2)]">Canvas Width</label>
                    <input type="number" value={config.figWidth} onChange={e => updateConfig({ figWidth: parseInt(e.target.value) || 0 })} className="w-full" />
                  </div>
                  <div>
                    <label className="block mb-1 text-[11px] font-medium text-[var(--text2)]">Canvas Height</label>
                    <input type="number" value={config.figHeight} onChange={e => updateConfig({ figHeight: parseInt(e.target.value) || 0 })} className="w-full" />
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
            </div>
          </div>

          {dataSectionOpen && (
            <div className="flex flex-col flex-1 min-h-0">
               {/* Scenario Tabs */}
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

              <div className="flex-1 p-4 overflow-y-auto">
                {inputMode === 'table' ? (
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

         {/* View Controls */}
         <div className="flex items-center gap-2.5 p-1.5 px-4 bg-[var(--surface)] border-b border-[var(--border)] shrink-0">
           <span className="text-[11px] font-medium text-[var(--text3)]">Viewing:</span>
           <button 
             className={cn(
               "px-3.5 py-1 text-xs font-semibold rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] transition-all",
               viewScenario === 'before' ? "bg-[var(--accent)] border-[var(--accent)] text-white" : "text-[var(--text2)] hover:border-[var(--text2)] hover:text-[var(--text)]"
             )}
             onClick={() => setViewScenario('before')}
           >
             Before
           </button>
           <button 
             className={cn(
               "px-3.5 py-1 text-xs font-semibold rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface2)] transition-all",
               viewScenario === 'after' ? "bg-[#22c55e] border-[#22c55e] text-white" : "text-[var(--text2)] hover:border-[var(--text2)] hover:text-[var(--text)]"
             )}
             onClick={() => setViewScenario('after')}
           >
             After
           </button>
         </div>
 
         {/* Diagram Area */}
         <div className="relative flex-1 overflow-auto bg-[var(--bg)] scrollbar-hide">
           <button 
             onClick={resetLayout}
             className="absolute top-1.5 right-1.5 z-10 flex items-center gap-1 py-1 px-2.5 border border-[var(--border)] bg-[var(--surface)] rounded-[var(--radius)] text-[11px] font-medium text-[var(--text2)] transition-colors hover:border-[var(--text2)] hover:text-[var(--text)]"
           >
             <RotateCcw size={13} /> Reset Layout
           </button>
           <div className="flex justify-center p-4">
             <SankeyDiagram 
               scenario={activeScenario}
               config={config}
               onNodeDrag={handleNodeDrag}
               animating={animating}
               animSpeed={animSpeed}
             />
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
           </div>
         )}
       </main>
     </div>
   );
 }
