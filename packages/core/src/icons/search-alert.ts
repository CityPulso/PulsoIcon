import { icon } from "../icon.js";

export const SearchAlert = icon("SearchAlert", "search-alert", {
  nodes: [
    ["circle", { cx: "11", cy: "11", r: "8" }, { r: "swing", a: 12, o: [11, 11] }],
    ["path", { d: "m21 21-4.3-4.3" }, { r: "swing", a: 12, o: [11, 11] }],
    ["path", { d: "M11 7v4" }, { r: "grow", d: 0.1, o: [11, 7] }],
    ["path", { d: "M11 15h.01" }, { r: "pop", d: 0.2, o: [11.005, 15] }],
  ],
});
