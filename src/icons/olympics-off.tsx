import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "olympics-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const OlympicsOff = createIcon("OlympicsOff", "olympics-off", {
  nodes: [
    ["path", { d: "M6 6a3 3 0 1 0 3 3" }, { r: "pop", o: [6, 9] }],
    ["path", { d: "M15 9a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", d: 0.12, o: [18, 9] }],
    ["path", { d: "M9 9a3 3 0 0 0 3 3m2.566 -1.445a3 3 0 0 0 -4.135 -4.113" }, { r: "pop", d: 0.06, o: [12, 9] }],
    ["path", { d: "M6 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }, { r: "pop", d: 0.18, o: [9, 15] }],
    ["path", { d: "M12.878 12.88a3 3 0 0 0 4.239 4.247m.586 -3.431a3.012 3.012 0 0 0 -1.43 -1.414" }, { r: "pop", d: 0.24, o: [15, 15] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["circle", { cx: "5.5", cy: "10", r: "3" }, { r: "pop", o: [6, 9] }],
    ["circle", { cx: "12", cy: "10", r: "3" }, { r: "pop", d: 0.06, o: [12, 9] }],
    ["circle", { cx: "12", cy: "10", r: "5" }, { r: "pop", d: 0.06, o: [12, 9] }, "cut"],
    ["circle", { cx: "18.5", cy: "10", r: "3" }, { r: "pop", d: 0.12, o: [18, 9] }],
    ["circle", { cx: "18.5", cy: "10", r: "5" }, { r: "pop", d: 0.12, o: [18, 9] }, "cut"],
    ["circle", { cx: "8.75", cy: "13.5", r: "3" }, { r: "pop", d: 0.18, o: [9, 15] }],
    ["circle", { cx: "8.75", cy: "13.5", r: "5" }, { r: "pop", d: 0.18, o: [9, 15] }, "cut"],
    ["circle", { cx: "15.25", cy: "13.5", r: "3" }, { r: "pop", d: 0.24, o: [15, 15] }],
    ["circle", { cx: "15.25", cy: "13.5", r: "5" }, { r: "pop", d: 0.24, o: [15, 15] }, "cut"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
