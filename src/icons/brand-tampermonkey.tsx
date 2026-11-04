import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "tampermonkey" (CC0-1.0). Tampermonkey is a trademark of its owner.
export const BrandTampermonkey = createIcon("BrandTampermonkey", "brand-tampermonkey", {
  nodes: [
    ["rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "8", cy: "15.5", r: "3" }, { r: "blink", o: [8, 15.5] }],
    ["circle", { cx: "16", cy: "15.5", r: "3" }, { r: "blink", o: [16, 15.5] }],
  ],
});
