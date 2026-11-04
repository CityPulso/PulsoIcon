import { createIcon } from "../runtime/createIcon.js";

export const BookDown = createIcon("BookDown", "book-down", {
  nodes: [
    ["path", { d: "M12 13V7" }, { r: "bounce", d: 0.1, y: 1, a: 2, o: [12, 10] }],
    ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "m9 10 3 3 3-3" }, { r: "bounce", d: 0.1, y: 1, a: 2, o: [12, 10] }],
  ],
});
