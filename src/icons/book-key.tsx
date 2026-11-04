import { createIcon } from "../runtime/createIcon.js";

export const BookKey = createIcon("BookKey", "book-key", {
  nodes: [
    ["path", { d: "M13 2H6.5A2.5 2.5 0 0 0 4 4.5v15" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M17 2v6" }, { r: "turn", d: 0.1, a: 30, o: [17, 10] }],
    ["path", { d: "M17 4h2" }, { r: "turn", d: 0.1, a: 30, o: [17, 10] }],
    ["path", { d: "M20 15.2V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["circle", { cx: "17", cy: "10", r: "2" }, { r: "turn", d: 0.1, a: 30, o: [17, 10] }],
  ],
});
