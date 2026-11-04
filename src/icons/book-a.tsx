import { createIcon } from "../runtime/createIcon.js";

export const BookA = createIcon("BookA", "book-a", {
  nodes: [
    ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "m8 13 4-7 4 7" }, { r: "draw", d: 0.1, o: [12, 9.5] }],
    ["path", { d: "M9.1 11h5.7" }, { r: "growX", d: 0.3, o: [11.95, 11] }],
  ],
});
