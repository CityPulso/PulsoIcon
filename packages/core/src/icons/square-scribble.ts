import { icon } from "../icon.js";

export const SquareScribble = icon("SquareScribble", "square-scribble", {
  nodes: [
    ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6 17.5c1.5-2.5 2.5-3 3-2s0 2.5 1 2.5 1.5-1.5 3-2.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M18.5 3.5a2.121 2.121 0 0 1 3 3L16 12l-4 1 1-4z" }, { r: "tilt", d: 0.05, a: 12, o: [12.5, 12.5] }],
  ],
});
