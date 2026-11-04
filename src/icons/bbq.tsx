import { createIcon } from "../runtime/createIcon.js";

export const Bbq = createIcon("Bbq", "bbq", {
  nodes: [
    ["path", { d: "M3 9h18a9 7 0 0 1-18 0z" }, { r: "press", a: 0.05, o: [12, 16] }],
    ["path", { d: "m7.5 15-2.5 7" }, { r: "press", a: 0.05, o: [12, 16] }],
    ["path", { d: "m16.5 15 2.5 7" }, { r: "press", a: 0.05, o: [12, 16] }],
    ["path", { d: "M12 16v6" }, { r: "press", a: 0.05, o: [12, 16] }],
    ["path", { d: "M9 2c-.6.8.6 1.7 0 2.5S9 6 9 6" }, { r: "float", a: 1.5, o: [9, 4] }],
    ["path", { d: "M15 2c-.6.8.6 1.7 0 2.5S15 6 15 6" }, { r: "float", d: 0.12, a: 1.5, o: [15, 4] }],
  ],
});
