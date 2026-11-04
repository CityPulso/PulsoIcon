import { createIcon } from "../runtime/createIcon.js";

export const SearchCheck = createIcon("SearchCheck", "search-check", {
  nodes: [
    ["path", { d: "m8 11 2 2 4-4" }, { r: "draw", d: 0.15, o: [11, 11] }],
    ["circle", { cx: "11", cy: "11", r: "8" }, { r: "swing", a: 12, o: [11, 11] }],
    ["path", { d: "m21 21-4.3-4.3" }, { r: "swing", a: 12, o: [11, 11] }],
  ],
});
