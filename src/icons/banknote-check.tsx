import { createIcon } from "../runtime/createIcon.js";

export const BanknoteCheck = createIcon("BanknoteCheck", "banknote-check", {
  nodes: [
    ["path", { d: "M11.748 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4.875" }, { r: "press", a: 0.06, o: [12, 12] }],
    ["path", { d: "m16 19 2 2 4-4" }, { r: "draw", d: 0.2, o: [19, 19] }],
    ["path", { d: "M18 12h.01" }, { r: "pop", d: 0.1, o: [18.005, 12] }],
    ["path", { d: "M6 12h.01" }, { r: "pop", d: 0.15, o: [6.005, 12] }],
    ["circle", { cx: "12", cy: "12", r: "2" }, { r: "press", a: 0.06, o: [12, 12] }],
  ],
});
