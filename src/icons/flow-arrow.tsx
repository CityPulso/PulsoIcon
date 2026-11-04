import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "flow-arrow" (MIT, Copyright (c) 2023 Phosphor Icons).
export const FlowArrow = createIcon("FlowArrow", "flow-arrow", {
  nodes: [
    ["circle", { cx: "5", cy: "18", r: "2.5" }, { r: "pop", o: [5, 18] }],
    ["path", { d: "M7.5 18c3.5 0 4-3.5 5.5-6.5S16.5 7 21 7" }, { r: "draw", d: 0.1 }],
    ["path", { d: "m18 4 3 3-3 3" }, { r: "pop", d: 0.4, o: [21, 7] }],
  ],
});
