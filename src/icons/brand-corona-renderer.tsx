import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "coronarenderer" (CC0-1.0). Corona Renderer is a trademark of its owner.
export const BrandCoronaRenderer = createIcon("BrandCoronaRenderer", "brand-corona-renderer", {
  nodes: [
    ["rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }],
    ["circle", { cx: "13.5", cy: "12", r: "3.5" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M10 6.5a6.5 6.5 0 0 0-4 3" }, { r: "spin", o: [12, 12] }],
    ["path", { d: "M6.5 14a6.5 6.5 0 0 0 3 4" }, { r: "spin", o: [12, 12] }],
  ],
});
