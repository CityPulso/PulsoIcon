import { createIcon } from "../runtime/createIcon.js";

export const HouseSmile = createIcon("HouseSmile", "house-smile", {
  nodes: [
    ["path", { d: "M9 15s1 1.5 3 1.5 3-1.5 3-1.5" }, { r: "draw", d: 0.15, o: [12, 15.75] }],
    ["path", { d: "M9.5 11.5h.01" }, { r: "blink", d: 0.1, o: [9.5, 11.5] }],
    ["path", { d: "M14.5 11.5h.01" }, { r: "blink", d: 0.1, o: [14.5, 11.5] }],
    ["path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }, { r: "press", a: 0.04, o: [12, 21] }],
  ],
});
