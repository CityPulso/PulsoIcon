import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "caret-circle-up-down" (MIT, Copyright (c) 2023 Phosphor Icons).
export const CaretCircleUpDown = createIcon("CaretCircleUpDown", "caret-circle-up-down", {
  nodes: [
    ["path", { d: "m9 10 3-3 3 3" }, { r: "slide", y: -1, a: 1.5, o: [12, 8.5] }],
    ["path", { d: "m9 14 3 3 3-3" }, { r: "slide", y: 1, a: 1.5, o: [12, 15.5] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
  ],
});
