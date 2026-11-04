import { createIcon } from "../runtime/createIcon.js";

export const SearchSlash = createIcon("SearchSlash", "search-slash", {
  nodes: [
    ["path", { d: "m13.5 8.5-5 5" }, { r: "draw", d: 0.15, o: [11, 11] }],
    ["circle", { cx: "11", cy: "11", r: "8" }, { r: "swing", a: 12, o: [11, 11] }],
    ["path", { d: "m21 21-4.3-4.3" }, { r: "swing", a: 12, o: [11, 11] }],
  ],
});
