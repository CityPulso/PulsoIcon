import { icon } from "../icon.js";

export const BookOpenText = icon("BookOpenText", "book-open-text", {
  nodes: [
    ["path", { d: "M12 5v16" }, { r: "press", a: 0.05, o: [12, 21] }],
    ["path", { d: "M16 13h2" }, { r: "growX", d: 0.1, o: [17, 13] }],
    ["path", { d: "M16 9h2" }, { r: "growX", d: 0.16, o: [17, 9] }],
    [
      "path",
      { d: "M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" },
      { r: "press", a: 0.05, o: [12, 21] },
    ],
    ["path", { d: "M6 13h2" }, { r: "growX", d: 0.22, o: [7, 13] }],
    ["path", { d: "M6 9h2" }, { r: "growX", d: 0.28, o: [7, 9] }],
  ],
});
