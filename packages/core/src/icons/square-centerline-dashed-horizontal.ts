import { icon } from "../icon.js";

export const SquareCenterlineDashedHorizontal = icon("SquareCenterlineDashedHorizontal", "square-centerline-dashed-horizontal", {
  nodes: [
    ["path", { d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3" }, { r: "slide", x: -1, a: 1.5, o: [5.5, 12] }],
    ["path", { d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" }, { r: "slide", x: 1, a: 1.5, o: [18.5, 12] }],
    ["path", { d: "M12 20v2" }, { r: "fade", d: 0.12, o: [12, 12] }],
    ["path", { d: "M12 14v2" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M12 8v2" }, { r: "fade", d: 0.04, o: [12, 12] }],
    ["path", { d: "M12 2v2" }, { r: "fade", o: [12, 12] }],
  ],
});
