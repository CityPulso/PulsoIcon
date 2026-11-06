import { icon } from "../icon.js";

export const BookAudio = icon("BookAudio", "book-audio", {
  nodes: [
    ["path", { d: "M12 6v7" }, { r: "grow", d: 0.1, o: [12, 9.5] }],
    ["path", { d: "M16 8v3" }, { r: "grow", d: 0.18, o: [16, 9.5] }],
    ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M8 8v3" }, { r: "grow", d: 0.26, o: [8, 9.5] }],
  ],
});
