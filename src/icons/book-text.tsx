import { createIcon } from "../runtime/createIcon.js";

export const BookText = createIcon("BookText", "book-text", {
  nodes: [
    ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8 11h8" }, { r: "growX", d: 0.12, o: [8, 11] }],
    ["path", { d: "M8 7h6" }, { r: "growX", d: 0.05, o: [8, 7] }],
  ],
});
