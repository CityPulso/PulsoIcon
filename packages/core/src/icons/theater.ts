import { icon } from "../icon.js";

export const Theater = icon("Theater", "theater", {
  nodes: [
    ["path", { d: "M2 10s3-3 3-8" }, { r: "wobble", a: -6, o: [6, 10] }],
    ["path", { d: "M22 10s-3-3-3-8" }, { r: "wobble", d: 0.08, a: 6, o: [18, 10] }],
    ["path", { d: "M10 2c0 4.4-3.6 8-8 8" }, { r: "wobble", a: -6, o: [6, 10] }],
    ["path", { d: "M14 2c0 4.4 3.6 8 8 8" }, { r: "wobble", d: 0.08, a: 6, o: [18, 10] }],
    ["path", { d: "M2 10s2 2 2 5" }, { r: "wobble", a: -6, o: [6, 10] }],
    ["path", { d: "M22 10s-2 2-2 5" }, { r: "wobble", d: 0.08, a: 6, o: [18, 10] }],
    ["path", { d: "M8 15h8" }, { r: "growX", d: 0.15, o: [12, 15] }],
    ["path", { d: "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" }, { r: "wobble", a: -6, o: [6, 10] }],
    ["path", { d: "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" }, { r: "wobble", d: 0.08, a: 6, o: [18, 10] }],
  ],
});
