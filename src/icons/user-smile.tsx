import { createIcon } from "../runtime/createIcon.js";

export const UserSmile = createIcon("UserSmile", "user-smile", {
  nodes: [
    ["path", { d: "M5 21v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1" }, { r: "rise", d: 0.05, a: 1, o: [12, 18] }],
    ["circle", { cx: "12", cy: "7.5", r: "5" }, { r: "float", a: 1.5, o: [12, 7.5] }],
    ["path", { d: "M10 6h.01" }, { r: "blink", d: 0.1, o: [12, 6] }],
    ["path", { d: "M14 6h.01" }, { r: "blink", d: 0.1, o: [12, 6] }],
    ["path", { d: "M10 8.75a2.5 2.5 0 0 0 4 0" }, { r: "draw", d: 0.15, o: [12, 9.5] }],
  ],
});
