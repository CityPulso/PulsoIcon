import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "weread" (CC0-1.0). WeRead is a trademark of its owner.
export const BrandWeread = createIcon("BrandWeread", "brand-weread", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }],
    ["path", { d: "M3 17c3.5-.5 6.5 0 9 2 2.5-2 5.5-2.5 9-2" }, { r: "draw" }],
    ["path", { d: "M12.4 12 11.5 14.3l2.47-.98A3 3 0 1 0 12.4 12z" }, { r: "pop", d: 0.2, o: [15, 10.5] }],
  ],
});
