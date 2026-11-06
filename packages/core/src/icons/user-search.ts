import { icon } from "../icon.js";

export const UserSearch = icon("UserSearch", "user-search", {
  nodes: [
    ["circle", { cx: "10", cy: "7", r: "4" }, { r: "float", a: 1.5, o: [8.5, 12] }],
    ["path", { d: "M10.3 15H7a4 4 0 0 0-4 4v2" }, { r: "float", a: 1.5, o: [8.5, 12] }],
    ["circle", { cx: "17", cy: "17", r: "3" }, { r: "swing", d: 0.1, a: 15, o: [17, 17] }],
    ["path", { d: "m21 21-1.9-1.9" }, { r: "swing", d: 0.1, a: 15, o: [17, 17] }],
  ],
});
