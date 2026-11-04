import { createIcon } from "../runtime/createIcon.js";

export const ApertureAi = createIcon("ApertureAi", "aperture-ai", {
  nodes: [
    ["circle", { cx: "10", cy: "10", r: "8" }, { r: "press", a: 0.04, o: [10, 10] }],
    ["path", { d: "m11.85 6.8 4.59 7.95" }, { r: "spin", a: 60, o: [10, 10] }],
    ["path", { d: "M8.15 6.8h9.19" }, { r: "spin", a: 60, o: [10, 10] }],
    ["path", { d: "m6.3 10 4.6-7.95" }, { r: "spin", a: 60, o: [10, 10] }],
    ["path", { d: "M8.15 13.2 3.56 5.25" }, { r: "spin", a: 60, o: [10, 10] }],
    ["path", { d: "M11.85 13.2H2.66" }, { r: "spin", a: 60, o: [10, 10] }],
    ["path", { d: "m13.7 10-4.6 7.95" }, { r: "spin", a: 60, o: [10, 10] }],
    ["path", { d: "M19 22a4 4 0 0 1 3-3 4 4 0 0 1-3-3 4 4 0 0 1-3 3 4 4 0 0 1 3 3" }, { r: "twinkle", d: 0.2, o: [19, 19] }],
  ],
});
