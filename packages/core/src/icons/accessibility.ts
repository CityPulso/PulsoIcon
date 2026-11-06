import { icon } from "../icon.js";

export const Accessibility = icon("Accessibility", "accessibility", {
  nodes: [
    ["circle", { cx: "16", cy: "4", r: "1" }, { r: "bounce", y: -1, a: 2, o: [16, 4] }],
    ["path", { d: "m18 19 1-7-6 1" }],
    ["path", { d: "m5 8 3-3 5.5 3-2.36 3.5" }, { r: "swing", d: 0.05, a: 12, o: [9, 8] }],
    ["path", { d: "M4.24 14.5a5 5 0 0 0 6.88 6" }, { r: "spin", d: 0.1, o: [9, 16] }],
    ["path", { d: "M13.76 17.5a5 5 0 0 0-6.88-6" }, { r: "spin", d: 0.1, o: [9, 16] }],
  ],
});
