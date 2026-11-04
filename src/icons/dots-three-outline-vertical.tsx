import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "dots-three-outline-vertical" (MIT, Copyright (c) 2023 Phosphor Icons).

export const DotsThreeOutlineVertical = createIcon("DotsThreeOutlineVertical", "dots-three-outline-vertical", {
  nodes: [
    ["circle", { cx: "12", cy: "5", r: "2" }, { r: "bounce", x: 1, y: 0, a: 1.5, o: [12, 5] }],
    ["circle", { cx: "12", cy: "12", r: "2" }, { r: "bounce", d: 0.08, x: 1, y: 0, a: 1.5, o: [12, 12] }],
    ["circle", { cx: "12", cy: "19", r: "2" }, { r: "bounce", d: 0.16, x: 1, y: 0, a: 1.5, o: [12, 19] }],
  ],
});
