import { createIcon } from "../runtime/createIcon.js";

export const FishingRod = createIcon("FishingRod", "fishing-rod", {
  nodes: [
    ["path", { d: "M4 11h1" }, { r: "fade", o: [4.5, 11] }],
    ["path", { d: "M8 15a2 2 0 0 1-4 0V3a1 1 0 0 1 1-1h.5C14 2 20 9 20 18v4" }, { r: "tilt", a: 8, o: [4, 22] }],
    ["circle", { cx: "18", cy: "18", r: "2" }, { r: "bounce", d: 0.15, y: 1, a: 2, o: [18, 18] }],
  ],
});
