import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "regex-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RegexOff = createIcon("RegexOff", "regex-off", {
  text: true,
  nodes: [
    ["path", { d: "M6.5 15a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0 -5" }, { r: "pop", d: 0, o: [6.5, 17.5] }],
    ["path", { d: "M17 7.875l3 -1.687" }, { r: "spin", d: 0.05, o: [17, 7.875] }],
    ["path", { d: "M17 7.875v3.375" }, { r: "spin", d: 0.05, o: [17, 7.875] }],
    ["path", { d: "M17 7.875l-3 -1.687" }, { r: "spin", d: 0.05, o: [17, 7.875] }],
    ["path", { d: "M17 7.875l3 1.688" }, { r: "spin", d: 0.05, o: [17, 7.875] }],
    ["path", { d: "M17 4.5v3.375" }, { r: "spin", d: 0.05, o: [17, 7.875] }],
    ["path", { d: "M17 7.875l-3 1.688" }, { r: "spin", d: 0.05, o: [17, 7.875] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M17 3v10", fill: "none" }, { r: "spin", d: 0.05, o: [17, 7.875] }],
    ["path", { d: "m12.67 5.5 8.66 5", fill: "none" }, { r: "spin", d: 0.05, o: [17, 7.875] }],
    ["path", { d: "m12.67 10.5 8.66-5", fill: "none" }, { r: "spin", d: 0.05, o: [17, 7.875] }],
    ["path", { d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z", fill: "none" }, { r: "pop", d: 0, o: [6.5, 17.5] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
