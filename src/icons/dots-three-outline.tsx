import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "dots-three-outline" (MIT, Copyright (c) 2023 Phosphor Icons).

export const DotsThreeOutline = createIcon("DotsThreeOutline", "dots-three-outline", {
  nodes: [
    ["circle", { cx: "5", cy: "12", r: "2" }, { r: "bounce", y: -1, a: 1.5, o: [5, 12] }],
    ["circle", { cx: "12", cy: "12", r: "2" }, { r: "bounce", d: 0.08, y: -1, a: 1.5, o: [12, 12] }],
    ["circle", { cx: "19", cy: "12", r: "2" }, { r: "bounce", d: 0.16, y: -1, a: 1.5, o: [19, 12] }],
  ],
});
