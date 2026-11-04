import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "equal-double" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const EqualDouble = createIcon("EqualDouble", "equal-double", {
  nodes: [
    ["path", { d: "M3 10h7" }, { r: "growX", o: [3, 10] }],
    ["path", { d: "M3 14h7" }, { r: "growX", d: 0.1, o: [3, 14] }],
    ["path", { d: "M14 10h7" }, { r: "growX", d: 0.2, o: [14, 10] }],
    ["path", { d: "M14 14h7" }, { r: "growX", d: 0.3, o: [14, 14] }],
  ],
});
