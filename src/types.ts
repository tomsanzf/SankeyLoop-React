export interface Flow {
  Source: string;
  Target: string;
  Value: string;
  Color: string;
}

export interface NodePosition {
  x: number;
  y: number;
}

export interface Scenario {
  flows: Flow[];
  nodeColorOverrides: Record<string, string>;
  nodePositions: Record<string, NodePosition>;
  hasDraggedNodes: boolean;
}

export interface Config {
  orientation: 'h' | 'v';
  highVal: number;
  hotHighCol: string;
  hotLowCol: string;
  midVal: number;
  coldHighCol: string;
  coldLowCol: string;
  lowVal: number;
  nodeAlignment: 'justify' | 'left' | 'center' | 'right';
  nodeArrangement: 'snap' | 'perpendicular' | 'freeform';
  vMargin: number;
  hMargin: number;
  nodeSpacing: number;
  nodeThickness: number;
  linkOpacity: number;
  ghostOpacity: number;
  arrowSize: number;
  labelSize: number;
  labelColor: string;
  defaultNodeColor: string;
  figWidth: number;
  figHeight: number;
  valueUnit: string;
  gradUnit: string;
  gradGap: number;
  theme: 'light' | 'dark';
  bgColor: string;
}
