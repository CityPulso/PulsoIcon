import { createIcon } from "../runtime/createIcon.js";

export const Fossil = createIcon("Fossil", "fossil", {
  nodes: [
    ["path", { d: "M17 8.5c2.5 0 5 1.5 5 3.5s-2.5 3.5-5 3.5Z" }, { r: "wobble", a: 4, o: [12, 12] }],
    ["path", { d: "M6 12h11" }, { r: "draw", o: [11.5, 12] }],
    ["path", { d: "M2 9v6l4-3Z" }, { r: "swing", d: 0.1, a: 12, o: [6, 12] }],
    ["path", { d: "M8.5 9v6" }, { r: "pop", d: 0.15, o: [8.5, 12] }],
    ["path", { d: "M11.5 8v8" }, { r: "pop", d: 0.2, o: [11.5, 12] }],
    ["path", { d: "M14.5 9v6" }, { r: "pop", d: 0.25, o: [14.5, 12] }],
  ],
});
