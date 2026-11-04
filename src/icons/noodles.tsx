import { createIcon } from "../runtime/createIcon.js";

export const Noodles = createIcon("Noodles", "noodles", {
  nodes: [
    ["path", { d: "M4 13a1 1 0 0 0-.99 1.133A8 8 0 0 0 12 21a8 8 0 0 0 8.99-6.867A1 1 0 0 0 20 13z" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "m11 6 11-3" }, { r: "lift", d: 0.05, o: [16, 5] }],
    ["path", { d: "m11 9 11-2" }, { r: "lift", d: 0.05, o: [16, 5] }],
    ["path", { d: "M9 13c0-1.5-1-2-1-3.5S9 7 9 6" }, { r: "float", d: 0.1, a: 1.5, o: [8.5, 9.5] }],
    ["path", { d: "M12.5 13c0-1.5-1-2-1-3.5s.5-2 .5-2.5" }, { r: "float", d: 0.16, a: 1.5, o: [12, 10] }],
  ],
});
