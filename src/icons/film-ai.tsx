import { createIcon } from "../runtime/createIcon.js";

export const FilmAi = createIcon("FilmAi", "film-ai", {
  text: true,
  nodes: [
    ["path", { d: "M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 3v18" }, { r: "slide", y: 1, a: 1.5, o: [7, 12] }],
    ["path", { d: "M3 7.5h4" }, { r: "slide", d: 0.03, y: 1, a: 1.5, o: [5, 7.5] }],
    ["path", { d: "M3 16.5h4" }, { r: "slide", d: 0.06, y: 1, a: 1.5, o: [5, 16.5] }],
    ["path", { d: "M3 12h18" }, { r: "slide", d: 0.09, y: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M17 3v9" }, { r: "slide", d: 0.12, y: 1, a: 1.5, o: [17, 7.5] }],
    ["path", { d: "M17 7.5h4" }, { r: "slide", d: 0.15, y: 1, a: 1.5, o: [19, 7.5] }],
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "draw", d: 0.2, o: [16, 19] }],
    ["path", { d: "M14 19h4" }, { r: "draw", d: 0.35, o: [16, 19] }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.45, o: [21, 18] }],
  ],
});
