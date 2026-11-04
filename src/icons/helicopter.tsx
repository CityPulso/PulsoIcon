import { createIcon } from "../runtime/createIcon.js";

export const Helicopter = createIcon("Helicopter", "helicopter", {
  nodes: [
    ["path", { d: "M11 17v4" }, { r: "float", d: 0.05, a: 1.5, o: [12, 12] }],
    ["path", { d: "M14 3v8a2 2 0 0 0 2 2h5.865" }, { r: "float", d: 0.05, a: 1.5, o: [12, 12] }],
    ["path", { d: "M17 17v4" }, { r: "float", d: 0.05, a: 1.5, o: [12, 12] }],
    ["path", { d: "M18 17a4 4 0 0 0 4-4 8 6 0 0 0-8-6 6 5 0 0 0-6 5v3a2 2 0 0 0 2 2z" }, { r: "float", d: 0.05, a: 1.5, o: [12, 12] }],
    ["path", { d: "M2 10v5" }, { r: "float", d: 0.05, a: 1.5, o: [12, 12] }],
    ["path", { d: "M6 3h16" }, { r: "flip", o: [14, 3] }],
    ["path", { d: "M7 21h14" }, { r: "float", d: 0.05, a: 1.5, o: [12, 12] }],
    ["path", { d: "M8 13H2" }, { r: "float", d: 0.05, a: 1.5, o: [12, 12] }],
  ],
});
