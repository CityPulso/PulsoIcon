import { createIcon } from "../runtime/createIcon.js";

export const BrandPatreon = createIcon("BrandPatreon", "brand-patreon", {
  nodes: [
    ["circle", { cx: "15", cy: "9.5", r: "6.5" }, { r: "pop", d: 0.1, a: 0.2, o: [15, 9.5] }],
    ["rect", { x: "3", y: "3", width: "4", height: "18", rx: "1" }, { r: "grow", o: [5, 21] }],
  ],
});
