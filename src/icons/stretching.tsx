import { createIcon } from "../runtime/createIcon.js";

// Adapted from Hugeicons "workout-stretching" (MIT, Copyright (c) 2025 Hugeicons), re-stroked for this set.
export const Stretching = createIcon("Stretching", "stretching", {
  nodes: [
    ["circle", { cx: "14.5", cy: "5.5", r: "1.5" }, { r: "sway", a: 6, o: [11, 14] }],
    ["path", { d: "M9.75 3c-1.3 1.7-.9 4 1 5.2l4.7 3.2c1 .7 1.5 1 1.5 1.5s-.5.8-1.6 1.4L14.4 15" }, { r: "sway", a: 6, o: [11, 14] }],
    ["path", { d: "M10.7 8.2C8.2 10.7 7 17.6 7 21" }, { r: "press", a: 0.04, o: [11, 21] }],
    ["path", { d: "M13.4 10c-.8 1-1.4 2-1.8 2.9-.4.9-.6 1.4-.6 1.9s.4 1 1.1 2c1 1.5 2 3 2.9 4.2" }, { r: "press", a: 0.04, o: [11, 21] }],
  ],
});
