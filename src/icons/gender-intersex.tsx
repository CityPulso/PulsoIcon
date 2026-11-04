import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "gender-intersex" (MIT, Copyright (c) 2023 Phosphor Icons).
export const GenderIntersex = createIcon("GenderIntersex", "gender-intersex", {
  nodes: [
    ["circle", { cx: "10", cy: "12", r: "4.5" }, { r: "pulse", o: [10, 12] }],
    ["path", { d: "M13.2 8.8 19 3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M15 3h4v4" }, { r: "pop", d: 0.3, o: [19, 3] }],
    ["path", { d: "M10 16.5V22" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M7.5 19.5h5" }, { r: "draw", d: 0.3 }],
  ],
});
