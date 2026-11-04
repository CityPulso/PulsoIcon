import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "trezor" (CC0-1.0). Trezor is a trademark of its owner.
export const BrandTrezor = createIcon("BrandTrezor", "brand-trezor", {
  nodes: [
    ["path", { d: "M8 9V7a4 4 0 0 1 8 0v2" }, { r: "lift", y: -1.5, a: 0, o: [12, 9] }],
    ["path", { d: "M5 9h14v8l-7 4.5L5 17z" }, { r: "press", a: 0.05, o: [12, 21] }],
    ["path", { d: "M9 12.5h6" }, { r: "draw", d: 0.15 }],
  ],
});
