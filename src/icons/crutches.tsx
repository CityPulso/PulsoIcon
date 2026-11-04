import { createIcon } from "../runtime/createIcon.js";

export const Crutches = createIcon("Crutches", "crutches", {
  nodes: [
    ["path", { d: "M5.5 3h5" }, { r: "tilt", a: 6, o: [8, 21] }],
    ["path", { d: "M6.5 3 8 15l1.5-12" }, { r: "tilt", a: 6, o: [8, 21] }],
    ["path", { d: "M6.9 9h2.2" }, { r: "tilt", a: 6, o: [8, 21] }],
    ["path", { d: "M8 15v6" }, { r: "tilt", a: 6, o: [8, 21] }],
    ["path", { d: "M13.5 3h5" }, { r: "tilt", d: 0.1, a: 6, o: [16, 21] }],
    ["path", { d: "M14.5 3 16 15l1.5-12" }, { r: "tilt", d: 0.1, a: 6, o: [16, 21] }],
    ["path", { d: "M14.9 9h2.2" }, { r: "tilt", d: 0.1, a: 6, o: [16, 21] }],
    ["path", { d: "M16 15v6" }, { r: "tilt", d: 0.1, a: 6, o: [16, 21] }],
  ],
});
