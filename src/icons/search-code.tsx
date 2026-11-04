import { createIcon } from "../runtime/createIcon.js";

export const SearchCode = createIcon("SearchCode", "search-code", {
  nodes: [
    ["path", { d: "m13 13.5 2-2.5-2-2.5" }, { r: "slide", d: 0.1, x: 1, a: 1, o: [14, 11] }],
    ["path", { d: "m21 21-4.3-4.3" }, { r: "swing", a: 12, o: [11, 11] }],
    ["path", { d: "M9 8.5 7 11l2 2.5" }, { r: "slide", d: 0.1, x: -1, a: 1, o: [8, 11] }],
    ["circle", { cx: "11", cy: "11", r: "8" }, { r: "swing", a: 12, o: [11, 11] }],
  ],
});
