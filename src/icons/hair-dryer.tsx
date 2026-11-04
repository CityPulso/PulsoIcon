import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "hair-dryer" (MIT, Copyright (c) 2023 Phosphor Icons).
export const HairDryer = createIcon("HairDryer", "hair-dryer", {
  nodes: [
    ["path", { d: "M16 3a5 5 0 0 1 0 10L4 11.5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1Z" }, { r: "shake", a: 0.6, o: [12, 10] }],
    ["circle", { cx: "16", cy: "8", r: "2" }, { r: "shake", a: 0.6, o: [12, 10] }],
    ["path", { d: "m12.5 12.5-1 7.5a1 1 0 0 0 1 1H14a1 1 0 0 0 1-.9l.8-7.1" }, { r: "shake", a: 0.6, o: [12, 10] }],
  ],
});
