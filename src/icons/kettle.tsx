import { createIcon } from "../runtime/createIcon.js";

export const Kettle = createIcon("Kettle", "kettle", {
  nodes: [
    ["path", { d: "M3 21h14l-1.5-8.5a3 3 0 0 0-3-2.5H7.5a3 3 0 0 0-3 2.5z" }, { r: "shake", a: 0.5, o: [10, 15.5] }],
    ["path", { d: "M6.5 10V8a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v2" }, { r: "shake", a: 0.5, o: [10, 15.5] }],
    ["path", { d: "m16.2 16 3.8-4.5h1.5" }, { r: "shake", a: 0.5, o: [10, 15.5] }],
    ["path", { d: "M20 8c-.6-.8.6-1.7 0-2.5S20 4 20 3" }, { r: "float", d: 0.1, a: 1.5, o: [20, 5.5] }],
  ],
});
