import { createIcon } from "../runtime/createIcon.js";

export const Bread = createIcon("Bread", "bread", {
  nodes: [
    ["path", { d: "M4 19h16a1 1 0 0 0 1-1v-4a8 8 0 0 0-8-8h-2a8 8 0 0 0-8 8v4a1 1 0 0 0 1 1z" }, { r: "jelly", a: 0.08, o: [12, 19] }],
    ["path", { d: "m8 9 1.5 2.5" }, { r: "pop", d: 0.1, o: [8.75, 10.25] }],
    ["path", { d: "m11.5 8 1.5 2.5" }, { r: "pop", d: 0.16, o: [12.25, 9.25] }],
    ["path", { d: "m15 9 1.5 2.5" }, { r: "pop", d: 0.22, o: [15.75, 10.25] }],
  ],
});
