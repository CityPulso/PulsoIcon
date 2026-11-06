import { icon } from "../icon.js";

export const BookUser = icon("BookUser", "book-user", {
  nodes: [
    ["path", { d: "M15 13a3 3 0 1 0-6 0" }, { r: "rise", d: 0.15, a: 2, o: [12, 11.5] }],
    ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["circle", { cx: "12", cy: "8", r: "2" }, { r: "float", d: 0.1, o: [12, 8] }],
  ],
});
