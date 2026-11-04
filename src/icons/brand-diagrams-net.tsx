import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "diagramsdotnet" (CC0-1.0). diagrams.net is a trademark of its owner.
export const BrandDiagramsNet = createIcon("BrandDiagramsNet", "brand-diagrams-net", {
  nodes: [
    ["rect", { x: "2", y: "2", width: "20", height: "20", rx: "3" }],
    ["rect", { x: "9.5", y: "5", width: "5", height: "4", rx: "1" }, { r: "pop", o: [12, 7] }],
    ["rect", { x: "5", y: "15", width: "5", height: "4", rx: "1" }, { r: "pop", d: 0.15, o: [7.5, 17] }],
    ["rect", { x: "14", y: "15", width: "5", height: "4", rx: "1" }, { r: "pop", d: 0.2, o: [16.5, 17] }],
    ["path", { d: "M11 9l-3.5 6M13 9l3.5 6" }, { r: "draw", d: 0.08, o: [12, 12] }],
  ],
});
