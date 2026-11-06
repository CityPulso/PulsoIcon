import { icon } from "../icon.js";

// Adapted from Tabler Icons "math-y-plus-y" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MathYPlusY = icon("MathYPlusY", "math-y-plus-y", {
  nodes: [
    ["path", { d: "M2 9l3 5.063" }, { r: "pop", o: [5, 13] }],
    ["path", { d: "M8 9l-4.8 9" }, { r: "pop", o: [5, 13] }],
    ["path", { d: "M16 9l3 5.063" }, { r: "pop", d: 0.3, o: [19, 13] }],
    ["path", { d: "M22 9l-4.8 9" }, { r: "pop", d: 0.3, o: [19, 13] }],
    ["path", { d: "M10 12h4" }, { r: "spin", d: 0.15, a: 180, o: [12, 12] }],
    ["path", { d: "M12 10v4" }, { r: "spin", d: 0.15, a: 180, o: [12, 12] }],
  ],
});
