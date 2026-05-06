import * as fs from "fs";
const data = {
  "config": {
    "orientation": "h",
    "highVal": 180,
    "hotHighCol": "#FF0000",
    "hotLowCol": "#FFFF00",
    "midVal": 45,
    "coldHighCol": "#0000FF",
    "coldLowCol": "#800080",
    "lowVal": 0,
    "nodeAlignment": "center",
    "nodeArrangement": "snap",
    "vMargin": 100,
    "hMargin": 50,
    "nodeSpacing": 50,
    "nodeThickness": 10,
    "linkOpacity": 0.7,
    "ghostOpacity": 0.12,
    "arrowSize": 15,
    "labelSize": 13,
    "labelColor": "#1e293b",
    "defaultNodeColor": "#808080",
    "figWidth": 1200,
    "figHeight": 800,
    "valueUnit": "kW",
    "gradUnit": "°C",
    "gradGap": 20,
    "theme": "dark",
    "bgColor": "#ffffff",
    "nodeHeightMode": "match"
  },
  "scenarios": {
    "before": {
      "flows": [
        { "Source": "Gas", "Target": "Boiler", "Value": "217" },
        { "Source": "Boiler", "Target": "Steam", "Value": "186" },
        { "Source": "Boiler", "Target": "Purge", "Value": "1" },
        { "Source": "Boiler", "Target": "Stack", "Value": "30" },
        { "Source": "Steam", "Target": "Deaerator", "Value": "17" },
        { "Source": "Deaerator", "Target": "Boiler", "Value": "6" },
        { "Source": "Feedwater", "Target": "Deaerator", "Value": "-11" },
        { "Source": "Steam", "Target": "Process", "Value": "167" },
        { "Source": "Process", "Target": "Chilled Water", "Value": "60" },
        { "Source": "Chilled Water", "Target": "Chiller", "Value": "60" },
        { "Source": "Elec", "Target": "Chiller", "Value": "20" },
        { "Source": "Chiller", "Target": "Cooling Tower", "Value": "80" }
      ],
      "nodePositions": {
        "Gas": { "x": 0.004 }, "Boiler": { "x": 0.147 },
        "Steam": { "x": 0.288 }, "Purge": { "x": 0.292 },
        "Stack": { "x": 0.292 }, "Deaerator": { "x": 0.711 },
        "Feedwater": { "x": 0.866 }, "Process": { "x": 0.435 },
        "Chilled Water": { "x": 0.591 }, "Chiller": { "x": 0.721 },
        "Elec": { "x": 0.590 }, "Cooling Tower": { "x": 0.875 }
      },
      "hasDraggedNodes": true
    },
    "after": {
      "flows": [
        { "Source": "Gas", "Target": "Boiler", "Value": "78" },
        { "Source": "Boiler", "Target": "Steam", "Value": "67" },
        { "Source": "Boiler", "Target": "Purge", "Value": "1" },
        { "Source": "Boiler", "Target": "Stack", "Value": "10" },
        { "Source": "Steam", "Target": "Deaerator", "Value": "6" },
        { "Source": "Deaerator", "Target": "Boiler", "Value": "2" },
        { "Source": "Feedwater", "Target": "Deaerator", "Value": "-4" },
        { "Source": "Steam", "Target": "Process", "Value": "60" },
        { "Source": "Process", "Target": "Chilled Water", "Value": "60" },
        { "Source": "Chilled Water", "Target": "Chiller", "Value": "60" },
        { "Source": "Elec", "Target": "Chiller", "Value": "20" },
        { "Source": "Chiller", "Target": "HP", "Value": "80" },
        { "Source": "Elec", "Target": "HP", "Value": "27" },
        { "Source": "HP", "Target": "Process", "Value": "107" }
      ],
      "nodePositions": {
        "Gas": { "x": 0.004 }, "Boiler": { "x": 0.147 },
        "Steam": { "x": 0.288 }, "Purge": { "x": 0.292 },
        "Stack": { "x": 0.292 }, "Deaerator": { "x": 0.711 },
        "Feedwater": { "x": 0.866 }, "Process": { "x": 0.435 },
        "Chilled Water": { "x": 0.591 }, "Chiller": { "x": 0.721 },
        "Elec": { "x": 0.590 }, "HP": { "x": 0.866 }
      },
      "hasDraggedNodes": true
    }
  }
};

const labelsB = Array.from(new Set(data.scenarios.before.flows.flatMap(f => [f.Source, f.Target])));
const labelsA = Array.from(new Set(data.scenarios.after.flows.flatMap(f => [f.Source, f.Target])));

function getMetrics(scenario, labels) {
  const nodeValues = labels.map(l => {
    let inV = 0, outV = 0;
    scenario.flows.forEach(f => {
      if (f.Source === l) outV += Math.abs(parseFloat(f.Value));
      if (f.Target === l) inV += Math.abs(parseFloat(f.Value));
    });
    return Math.max(inV, outV);
  });
  
  const cols = {};
  labels.forEach((l, i) => {
    let x = scenario.nodePositions[l] ? scenario.nodePositions[l].x : 0;
    let k = x.toFixed(2);
    if (!cols[k]) cols[k] = {n: 0, v:0};
    cols[k].n++;
    cols[k].v += nodeValues[i];
  });
  
  let pad = data.config.nodeSpacing;
  let minPpu = Infinity;
  let availH = data.config.figHeight - 2 * data.config.vMargin;
  
  for (let k in cols) {
    if (cols[k].n > 0) {
      let reqPpu = Math.max(0, availH - pad * (cols[k].n - 1)) / (cols[k].v || 1e-5);
      if (reqPpu < minPpu) minPpu = reqPpu;
    }
  }
  return { minPpu, cols, availH };
}

console.log("Before:", getMetrics(data.scenarios.before, labelsB));
console.log("After:", getMetrics(data.scenarios.after, labelsA));
