import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "nodered" (CC0-1.0). Node-RED is a trademark of its owner.
export const BrandNodeRed = createIcon("BrandNodeRed", "brand-node-red", {
  nodes: [
    ["rect", { x: "2", y: "10.5", width: "4", height: "3", rx: "1" }],
    ["rect", { x: "11", y: "4.5", width: "8", height: "4", rx: "1.5" }],
    ["rect", { x: "16", y: "15.5", width: "5", height: "4", rx: "1.5" }],
    ["path", { d: "M6 12c3 0 2-5.5 5-5.5" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M6 12c4 0 5 5.5 10 5.5" }, { r: "draw", d: 0.15 }],
  ],
});
