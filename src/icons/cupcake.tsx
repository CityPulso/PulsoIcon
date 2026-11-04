import { createIcon } from "../runtime/createIcon.js";

export const Cupcake = createIcon("Cupcake", "cupcake", {
  nodes: [
    ["path", { d: "M12 22v-9" }, { r: "press", d: 0.2, a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 4h1a3 3 0 013 3l-.004.125A4 4 0 0121 11v2" }, { r: "jelly", d: 0.1, a: 0.1, o: [12, 13] }],
    ["path", { d: "m15.5 22 1.5-9" }, { r: "press", d: 0.2, a: 0.04, o: [12, 22] }],
    ["path", { d: "M21 13a1 1 0 01.919 1.394l-2.74 6.394A2 2 0 0117.34 22H6.659a2 2 0 01-1.838-1.212l-2.74-6.394A1 1 0 013 13z" }, { r: "press", d: 0.2, a: 0.04, o: [12, 22] }],
    ["path", { d: "M3 13v-2a4 4 0 013.003-3.875L6 7a3 3 0 013-3h1" }, { r: "jelly", d: 0.1, a: 0.1, o: [12, 13] }],
    ["path", { d: "M8.5 22 7 13" }, { r: "press", d: 0.2, a: 0.04, o: [12, 22] }],
    ["circle", { cx: "12", cy: "4", r: "2" }, { r: "drop", a: 3, o: [12, 4] }],
  ],
});
