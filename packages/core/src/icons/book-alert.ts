import { icon } from "../icon.js";

export const BookAlert = icon("BookAlert", "book-alert", {
  nodes: [
    ["path", { d: "M12 13h.01" }, { r: "pop", d: 0.3, o: [12.005, 13] }],
    ["path", { d: "M12 6v3" }, { r: "grow", d: 0.15, o: [12, 6] }],
    ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }, { r: "shake", a: 1, o: [12, 12] }],
  ],
});
