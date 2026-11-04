import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "stimulus" (CC0-1.0). Stimulus is a trademark of its owner.
export const BrandStimulus = createIcon("BrandStimulus", "brand-stimulus", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M3 9h3.5c3.5 0 4.5 6 8 6H21" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M3 15h3.5c3.5 0 4.5-6 8-6H21" }, { r: "draw", d: 0.2 }],
  ],
});
