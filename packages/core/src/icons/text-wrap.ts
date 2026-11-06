import { icon } from "../icon.js";

export const TextWrap = icon("TextWrap", "text-wrap", {
  nodes: [
    ["path", { d: "m16 16-3 3 3 3" }, { r: "slide", d: 0.25, x: -1, a: 1, o: [14.5, 19] }],
    ["path", { d: "M3 12h14.5a1 1 0 0 1 0 7H13" }, { r: "draw", d: 0.08, o: [12, 15.5] }],
    ["path", { d: "M3 19h6" }, { r: "growX", d: 0.2, o: [3, 19] }],
    ["path", { d: "M3 5h18" }, { r: "growX", o: [3, 5] }],
  ],
});
