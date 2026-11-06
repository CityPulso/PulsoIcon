import { icon } from "../icon.js";

export const BookUp2 = icon("BookUp2", "book-up-2", {
  nodes: [
    ["path", { d: "M12 13V7" }, { r: "bounce", d: 0.1, y: -1, a: 2, o: [12, 10] }],
    ["path", { d: "M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "m9 10 3-3 3 3" }, { r: "bounce", d: 0.1, y: -1, a: 2, o: [12, 10] }],
    ["path", { d: "m9 5 3-3 3 3" }, { r: "fade", d: 0.2, o: [12, 3.5] }],
  ],
});
