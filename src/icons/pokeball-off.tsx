import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "pokeball-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const PokeballOff = createIcon("PokeballOff", "pokeball-off", {
  nodes: [
    ["path", { d: "M20.04 16.048a9 9 0 0 0 -12.083 -12.09m-2.32 1.678a9 9 0 1 0 12.737 12.719" }, { r: "wobble", a: 10, o: [12, 20] }],
    ["path", { d: "M9.884 9.874a3 3 0 1 0 4.24 4.246m.57 -3.441a3.012 3.012 0 0 0 -1.41 -1.39" }, { r: "wobble", a: 10, o: [12, 20] }],
    ["path", { d: "M3 12h6m7 0h5" }, { r: "wobble", a: 10, o: [12, 20] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "wobble", a: 10, o: [12, 20] }],
    ["path", { d: "M2 12h7" }, { r: "wobble", a: 10, o: [12, 20] }, "line"],
    ["path", { d: "M15 12h7" }, { r: "wobble", a: 10, o: [12, 20] }, "line"],
    ["circle", { cx: "12", cy: "12", r: "3" }, { r: "wobble", a: 10, o: [12, 20] }, "cut"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
