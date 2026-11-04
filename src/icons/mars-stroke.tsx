import { createIcon } from "../runtime/createIcon.js";

export const MarsStroke = createIcon("MarsStroke", "mars-stroke", {
  nodes: [
    ["path", { d: "m14 6 4 4" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [17.125, 6.875] }],
    ["path", { d: "M17 3h4v4" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [17.125, 6.875] }],
    ["path", { d: "m21 3-7.75 7.75" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [17.125, 6.875] }],
    ["circle", { cx: "9", cy: "15", r: "6" }, { r: "press", a: 0.06, o: [9, 15] }],
  ],
});
