import { icon } from "../icon.js";

export const UserHeart = icon("UserHeart", "user-heart", {
  nodes: [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }, { r: "rise", d: 0.05, a: 1, o: [9, 18] }],
    ["circle", { cx: "9", cy: "7", r: "4" }, { r: "float", a: 1.5, o: [9, 7] }],
    [
      "path",
      { d: "M16 10.5a1.75 1.75 0 0 1 3-1.24 1.75 1.75 0 0 1 3 1.24c0 .9-.6 1.6-1.2 2.2L19 14.5l-1.8-1.8c-.6-.6-1.2-1.3-1.2-2.2" },
      { r: "beat", d: 0.15, a: 0.2, o: [19, 11.5] },
    ],
  ],
});
