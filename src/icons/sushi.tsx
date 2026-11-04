import { createIcon } from "../runtime/createIcon.js";

export const Sushi = createIcon("Sushi", "sushi", {
  nodes: [
    ["path", { d: "M3 13c0-3.5 4-6 9-6s9 2.5 9 6" }, { r: "drop", a: 3, o: [12, 10] }],
    ["path", { d: "m8.5 8 1.5 5" }, { r: "drop", a: 3, o: [12, 10] }],
    ["path", { d: "m13.5 7.2 1.5 5.8" }, { r: "drop", a: 3, o: [12, 10] }],
    ["path", { d: "M4 13h16a1 1 0 0 1 1 1v1a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-1a1 1 0 0 1 1-1z" }, { r: "press", d: 0.15, a: 0.08, o: [12, 19] }],
  ],
});
