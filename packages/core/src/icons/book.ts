import { icon } from "../icon.js";

export const Book = icon("Book", "book", {
  nodes: [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }, { r: "open", o: [4, 12] }]],
  solid: [
    ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 1 4 19.5z" }, { r: "open", o: [4, 12] }],
    ["path", { d: "M20 17H7" }, { r: "open", o: [4, 12] }, "cut"],
  ],
});
