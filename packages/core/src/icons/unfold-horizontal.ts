import { icon } from "../icon.js";

export const UnfoldHorizontal = icon("UnfoldHorizontal", "unfold-horizontal", {
  nodes: [
    ["path", { d: "M16 12h6" }, { r: "growX", o: [16, 12] }],
    ["path", { d: "M8 12H2" }, { r: "growX", o: [8, 12] }],
    ["path", { d: "M12 2v2" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M12 8v2" }, { r: "fade", d: 0.04, o: [12, 12] }],
    ["path", { d: "M12 14v2" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M12 20v2" }, { r: "fade", d: 0.12, o: [12, 12] }],
    ["path", { d: "m19 15 3-3-3-3" }, { r: "slide", x: 1, a: 2, o: [20.5, 12] }],
    ["path", { d: "m5 9-3 3 3 3" }, { r: "slide", x: -1, a: 2, o: [3.5, 12] }],
  ],
});
