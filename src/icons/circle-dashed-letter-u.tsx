import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "circle-dashed-letter-u" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CircleDashedLetterU = createIcon("CircleDashedLetterU", "circle-dashed-letter-u", {
  text: true,
  nodes: [
    ["path", { d: "M10 8v6a2 2 0 1 0 4 0v-6" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M8.56 3.69a9 9 0 0 0 -2.92 1.95" }, { r: "spin", a: 45, o: [12, 12] }],
    ["path", { d: "M3.69 8.56a9 9 0 0 0 -.69 3.44" }, { r: "spin", a: 45, o: [12, 12] }],
    ["path", { d: "M3.69 15.44a9 9 0 0 0 1.95 2.92" }, { r: "spin", a: 45, o: [12, 12] }],
    ["path", { d: "M8.56 20.31a9 9 0 0 0 3.44 .69" }, { r: "spin", a: 45, o: [12, 12] }],
    ["path", { d: "M15.44 20.31a9 9 0 0 0 2.92 -1.95" }, { r: "spin", a: 45, o: [12, 12] }],
    ["path", { d: "M20.31 15.44a9 9 0 0 0 .69 -3.44" }, { r: "spin", a: 45, o: [12, 12] }],
    ["path", { d: "M20.31 8.56a9 9 0 0 0 -1.95 -2.92" }, { r: "spin", a: 45, o: [12, 12] }],
    ["path", { d: "M15.44 3.69a9 9 0 0 0 -3.44 -.69" }, { r: "spin", a: 45, o: [12, 12] }],
  ],
});
