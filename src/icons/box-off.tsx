import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "box-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BoxOff = createIcon("BoxOff", "box-off", {
  nodes: [
    ["path", { d: "M17.765 17.757l-5.765 3.243l-8 -4.5v-9l2.236 -1.258m2.57 -1.445l3.194 -1.797l8 4.5v8.5" }, { r: "float", o: [12, 12] }],
    ["path", { d: "M14.561 10.559l5.439 -3.059" }, { r: "float", o: [12, 12] }],
    ["path", { d: "M12 12v9" }, { r: "float", o: [12, 12] }],
    ["path", { d: "M12 12l-8 -4.5" }, { r: "float", o: [12, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
