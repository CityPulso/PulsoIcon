import { createIcon } from "../runtime/createIcon.js";

export const Molecule = createIcon("Molecule", "molecule", {
  nodes: [
    ["circle", { cx: "12", cy: "7", r: "3" }, { r: "pop", o: [12, 7] }],
    ["circle", { cx: "6", cy: "17", r: "2.5" }, { r: "pop", d: 0.08, o: [6, 17] }],
    ["circle", { cx: "18", cy: "17", r: "2.5" }, { r: "pop", d: 0.16, o: [18, 17] }],
    ["path", { d: "M10.46 9.57 7.29 14.86" }, { r: "draw", d: 0.2, o: [9, 12] }],
    ["path", { d: "m13.54 9.57 3.17 5.29" }, { r: "draw", d: 0.25, o: [15, 12] }],
    ["path", { d: "M8.5 17h7" }, { r: "draw", d: 0.3, o: [12, 17] }],
  ],
});
