import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "microbit" (CC0-1.0). micro:bit is a trademark of its owner.
export const BrandMicroBit = createIcon("BrandMicroBit", "brand-micro-bit", {
  nodes: [
    ["rect", { x: "2", y: "7", width: "20", height: "10", rx: "5" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["circle", { cx: "7.5", cy: "12", r: "1.5" }, { r: "blink", d: 0.15, o: [7.5, 12] }],
    ["circle", { cx: "16.5", cy: "12", r: "1.5" }, { r: "blink", d: 0.15, o: [16.5, 12] }],
  ],
});
