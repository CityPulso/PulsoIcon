import { icon } from "../icon.js";

export const Move = icon("Move", "move", {
  nodes: [
    ["path", { d: "M12 2v20" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "m15 19-3 3-3-3" }, { r: "slide", d: 0.1, y: 1, a: 1.5, o: [12, 20.5] }],
    ["path", { d: "m19 9 3 3-3 3" }, { r: "slide", d: 0.05, x: 1, a: 1.5, o: [20.5, 12] }],
    ["path", { d: "M2 12h20" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "m5 9-3 3 3 3" }, { r: "slide", d: 0.15, x: -1, a: 1.5, o: [3.5, 12] }],
    ["path", { d: "m9 5 3-3 3 3" }, { r: "slide", y: -1, a: 1.5, o: [12, 3.5] }],
  ],
});
