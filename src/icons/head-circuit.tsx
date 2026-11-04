import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "head-circuit" (MIT, Copyright (c) 2023 Phosphor Icons).
export const HeadCircuit = createIcon("HeadCircuit", "head-circuit", {
  nodes: [
    ["path", { d: "M16 21v-4.6A7.5 7.5 0 1 0 4.6 11.3L3.3 14H5v3a2 2 0 0 0 2 2h2v2" }, { r: "press", a: 0.03, o: [12, 14] }],
    ["circle", { cx: "10.5", cy: "8", r: "1.5" }, { r: "pop", d: 0.1, o: [10.5, 8] }],
    ["path", { d: "M12 8h1.5a1 1 0 0 1 1 1v3" }, { r: "draw", d: 0.2, o: [13, 10] }],
    ["circle", { cx: "14.5", cy: "13.5", r: "1.5" }, { r: "pop", d: 0.35, o: [14.5, 13.5] }],
  ],
});
