import { createIcon } from "../runtime/createIcon.js";

export const Plate = createIcon("Plate", "plate", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "6" }, { r: "spin", a: 90, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "3" }, { r: "pop", d: 0.1, a: 0.15, o: [12, 12] }],
    ["path", { d: "M2 3v3.5a1.5 1.5 0 0 0 3 0V3" }, { r: "slide", x: -1, a: 1, o: [3.5, 12] }],
    ["path", { d: "M3.5 8v13" }, { r: "slide", x: -1, a: 1, o: [3.5, 12] }],
    ["path", { d: "M20.5 21V3a2.5 2.5 0 0 0-1.5 2.3V13h1.5" }, { r: "slide", x: 1, a: 1, o: [20, 12] }],
  ],
});
