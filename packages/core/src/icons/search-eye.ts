import { icon } from "../icon.js";

export const SearchEye = icon("SearchEye", "search-eye", {
  nodes: [
    ["path", { d: "m21 21-4.34-4.34" }, { r: "swing", a: 14, o: [11, 11] }],
    ["circle", { cx: "11", cy: "11", r: "8" }, { r: "swing", a: 14, o: [11, 11] }],
    ["path", { d: "M6.5 11s1.8-3 4.5-3 4.5 3 4.5 3-1.8 3-4.5 3-4.5-3-4.5-3z" }, { r: "blink", d: 0.15, o: [11, 11] }],
    ["path", { d: "M11 11h.01" }, { r: "slide", d: 0.3, x: 1, a: 1, o: [11, 11] }],
  ],
});
