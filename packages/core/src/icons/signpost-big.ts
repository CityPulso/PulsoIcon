import { icon } from "../icon.js";

export const SignpostBig = icon("SignpostBig", "signpost-big", {
  nodes: [
    ["path", { d: "M10 9H4L2 7l2-2h6" }, { r: "swing", a: -10, o: [10, 7] }],
    ["path", { d: "M14 5h6l2 2-2 2h-6" }, { r: "swing", d: 0.05, a: 10, o: [14, 7] }],
    ["path", { d: "M10 22V4a2 2 0 1 1 4 0v18" }, { r: "press", a: 0.03, o: [12, 22] }],
    ["path", { d: "M8 22h8" }, { r: "press", a: 0.03, o: [12, 22] }],
  ],
});
