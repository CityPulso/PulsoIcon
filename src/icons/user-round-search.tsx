import { createIcon } from "../runtime/createIcon.js";

export const UserRoundSearch = createIcon("UserRoundSearch", "user-round-search", {
  nodes: [
    ["circle", { cx: "10", cy: "8", r: "5" }, { r: "float", a: 1.5, o: [8.5, 12] }],
    ["path", { d: "M2 21a8 8 0 0 1 10.434-7.62" }, { r: "float", a: 1.5, o: [8.5, 12] }],
    ["circle", { cx: "18", cy: "18", r: "3" }, { r: "swing", d: 0.1, a: 15, o: [18, 18] }],
    ["path", { d: "m22 22-1.9-1.9" }, { r: "swing", d: 0.1, a: 15, o: [18, 18] }],
  ],
});
