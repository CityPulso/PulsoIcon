import { createIcon } from "../runtime/createIcon.js";

export const BookmarkMinus = createIcon("BookmarkMinus", "bookmark-minus", {
  nodes: [
    ["path", { d: "M15 10H9" }, { r: "growX", d: 0.1, o: [12, 10] }],
    ["path", { d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" }, { r: "swing", a: 6, o: [12, 3] }],
  ],
});
