import { icon } from "../icon.js";

export const ArrowsInVertical = icon("ArrowsInVertical", "arrows-in-vertical", {
  nodes: [
    ["path", { d: "M6 3h12" }, { r: "jelly", a: 0.08, o: [12, 3] }],
    ["path", { d: "M12 3v7" }, { r: "slide", y: 1, a: 1.5, o: [12, 7] }],
    ["path", { d: "m9 7 3 3 3-3" }, { r: "slide", y: 1, a: 1.5, o: [12, 7] }],
    ["path", { d: "M6 21h12" }, { r: "jelly", a: 0.08, o: [12, 21] }],
    ["path", { d: "M12 21v-7" }, { r: "slide", y: -1, a: 1.5, o: [12, 17] }],
    ["path", { d: "m9 17 3-3 3 3" }, { r: "slide", y: -1, a: 1.5, o: [12, 17] }],
  ],
});
