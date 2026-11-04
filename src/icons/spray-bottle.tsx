import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "spray-bottle" (MIT, Copyright (c) 2023 Phosphor Icons).

export const SprayBottle = createIcon("SprayBottle", "spray-bottle", {
  nodes: [
    ["path", { d: "M6 3h9a3 3 0 0 1 3 3v1h-6V3" }, { r: "press", a: 0.1, o: [12, 7] }],
    ["path", { d: "M12 7 9.5 10.5" }, { r: "tilt", a: 15, o: [12, 7] }],
    ["path", { d: "M12 7v2l-3 3.5V20a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-6.5L17 9.5V7" }],
    ["path", { d: "M3 6h.01" }, { r: "pop", d: 0.15, o: [3, 6] }],
    ["path", { d: "M3.5 9.5h.01" }, { r: "pop", d: 0.25, o: [3.5, 9.5] }],
  ],
});
