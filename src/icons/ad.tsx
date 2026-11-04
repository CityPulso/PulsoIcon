import { createIcon } from "../runtime/createIcon.js";

export const Ad = createIcon("Ad", "ad", {
  nodes: [
    ["path", { d: "M10 13H6" }, { r: "draw", o: [8, 12] }],
    ["path", { d: "M10 15v-4a2 2 0 0 0-4 0v4" }, { r: "draw", d: 0.1, o: [8, 12] }],
    ["path", { d: "M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z" }, { r: "draw", d: 0.2, o: [16, 12] }],
    ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }, { r: "press", a: 0.06, o: [12, 12] }],
  ],
});
