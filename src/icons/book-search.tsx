import { createIcon } from "../runtime/createIcon.js";

export const BookSearch = createIcon("BookSearch", "book-search", {
  nodes: [
    ["path", { d: "M11 22H5.5a1 1 0 0 1 0-5h4.501" }],
    ["path", { d: "m21 22-1.879-1.878" }, { r: "swing", d: 0.1, a: 15, o: [15, 16] }],
    ["path", { d: "M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8" }, { r: "press", a: 0.05, o: [11, 10.75] }],
    ["circle", { cx: "17", cy: "18", r: "3" }, { r: "swing", d: 0.1, a: 15, o: [15, 16] }],
  ],
});
