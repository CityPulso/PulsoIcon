import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "hemisphere-plus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HemispherePlus = createIcon("HemispherePlus", "hemisphere-plus", {
  nodes: [
    ["path", { d: "M3 9a9 3 0 1 0 18 0a9 3 0 1 0 -18 0" }, { r: "wobble", d: 0, o: [12, 12] }],
    ["path", { d: "M3 9a9 9 0 0 0 9 9m8.396 -5.752a8.978 8.978 0 0 0 .604 -3.248" }, { r: "wobble", d: 0, o: [12, 12] }],
    ["path", { d: "M16 19h6" }, { r: "spin", d: 0.15, a: 180, o: [19, 19] }],
    ["path", { d: "M19 16v6" }, { r: "spin", d: 0.15, a: 180, o: [19, 19] }],
  ],
});
