import { createIcon } from "../runtime/createIcon.js";

export const Thief = createIcon("Thief", "thief", {
  nodes: [
    ["circle", { cx: "12", cy: "8", r: "5" }, { r: "sway", a: 4, o: [12, 13] }],
    ["path", { d: "M7 7.5h10" }, { r: "sway", a: 4, o: [12, 13] }],
    ["path", { d: "M10 9.5h.01" }, { r: "blink", d: 0.2, o: [12, 9.5] }],
    ["path", { d: "M14 9.5h.01" }, { r: "blink", d: 0.2, o: [12, 9.5] }],
    ["path", { d: "M4.5 21a7.5 7.5 0 0 1 15 0" }, { r: "rise", d: 0.08, a: 1, o: [12, 17] }],
  ],
});
