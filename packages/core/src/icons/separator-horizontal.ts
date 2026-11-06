import { icon } from "../icon.js";

export const SeparatorHorizontal = icon("SeparatorHorizontal", "separator-horizontal", {
  nodes: [
    ["path", { d: "m16 16-4 4-4-4" }, { r: "slide", y: 1, a: 1.5, o: [12, 18] }],
    ["path", { d: "M3 12h18" }, { r: "growX", o: [12, 12] }],
    ["path", { d: "m8 8 4-4 4 4" }, { r: "slide", y: -1, a: 1.5, o: [12, 6] }],
  ],
});
