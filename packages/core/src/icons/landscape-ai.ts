import { icon } from "../icon.js";

export const LandscapeAi = icon("LandscapeAi", "landscape-ai", {
  text: true,
  nodes: [
    ["circle", { cx: "16", cy: "7", r: "2.5" }, { r: "rise", d: 0.1, a: 3, o: [16, 7] }],
    ["path", { d: "M10 20H2L8.5 9l3 5" }, { r: "press", a: 0.04, o: [7, 20] }],
    ["path", { d: "M14 21v-4a2 2 0 1 1 4 0v4" }, { r: "draw", d: 0.2, o: [16, 19] }],
    ["path", { d: "M14 19h4" }, { r: "draw", d: 0.35, o: [16, 19] }],
    ["path", { d: "M21 15v6" }, { r: "draw", d: 0.45, o: [21, 18] }],
  ],
});
