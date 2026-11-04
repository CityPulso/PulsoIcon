import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "car-profile" (MIT, Copyright (c) 2023 Phosphor Icons).
export const CarProfile = createIcon("CarProfile", "car-profile", {
  nodes: [
    ["path", { d: "M5 16H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3l3-3h6l3 3h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1h-2" }, { r: "bounce", y: -1, a: 1, o: [12, 12] }],
    ["path", { d: "M9 16h6" }, { r: "bounce", y: -1, a: 1, o: [12, 12] }],
    ["circle", { cx: "7", cy: "16", r: "2" }, { r: "spin", a: 360, o: [7, 16] }],
    ["circle", { cx: "17", cy: "16", r: "2" }, { r: "spin", a: 360, o: [17, 16] }],
  ],
});
