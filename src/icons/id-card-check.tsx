import { createIcon } from "../runtime/createIcon.js";

export const IdCardCheck = createIcon("IdCardCheck", "id-card-check", {
  nodes: [
    ["path", { d: "M22 13V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "8", cy: "10", r: "2" }, { r: "pop", d: 0.05, o: [8, 10] }],
    ["path", { d: "M11 16a3 3 0 0 0-6 0" }, { r: "rise", d: 0.1, a: 1, o: [8, 14.5] }],
    ["path", { d: "M14 10h4" }, { r: "growX", d: 0.15, o: [14, 10] }],
    ["path", { d: "m16 18 2 2 4-4" }, { r: "draw", d: 0.2, o: [19, 18] }],
  ],
});
