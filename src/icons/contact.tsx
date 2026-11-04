import { createIcon } from "../runtime/createIcon.js";

export const Contact = createIcon("Contact", "contact", {
  nodes: [
    ["path", { d: "M16 2v2" }, { r: "lift", o: [12, 3] }],
    ["path", { d: "M7 21v-2a2 2 0 012-2h6a2 2 0 012 2v2" }, { r: "rise", d: 0.15, a: 1, o: [12, 19] }],
    ["path", { d: "M8 2v2" }, { r: "lift", d: 0.06, o: [12, 3] }],
    ["circle", { cx: "12", cy: "10", r: "3" }, { r: "float", d: 0.1, a: 1.5, o: [12, 10] }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
