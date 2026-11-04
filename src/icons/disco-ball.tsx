import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "disco-ball" (MIT, Copyright (c) 2023 Phosphor Icons).

export const DiscoBall = createIcon("DiscoBall", "disco-ball", {
  nodes: [
    ["path", { d: "M10 2v5" }, { r: "swing", a: 8, o: [10, 2] }],
    ["circle", { cx: "10", cy: "14", r: "7" }, { r: "swing", a: 8, o: [10, 2] }],
    ["path", { d: "M10 7c-2 2-3 4.5-3 7s1 5 3 7" }, { r: "swing", a: 8, o: [10, 2] }],
    ["path", { d: "M10 7c2 2 3 4.5 3 7s-1 5-3 7" }, { r: "swing", a: 8, o: [10, 2] }],
    ["path", { d: "M3 14h14" }, { r: "swing", a: 8, o: [10, 2] }],
    ["path", { d: "M19 2v5" }, { r: "twinkle", d: 0.15, o: [19, 4.5] }],
    ["path", { d: "M16.5 4.5h5" }, { r: "twinkle", d: 0.15, o: [19, 4.5] }],
  ],
});
