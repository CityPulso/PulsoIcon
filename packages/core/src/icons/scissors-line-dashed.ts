import { icon } from "../icon.js";

export const ScissorsLineDashed = icon("ScissorsLineDashed", "scissors-line-dashed", {
  nodes: [
    ["path", { d: "M5.42 9.42 8 12" }, { r: "turn", a: -12, o: [8, 12] }],
    ["circle", { cx: "4", cy: "8", r: "2" }, { r: "turn", a: -12, o: [8, 12] }],
    ["path", { d: "m14 6-8.58 8.58" }, { r: "turn", a: -12, o: [8, 12] }],
    ["circle", { cx: "4", cy: "16", r: "2" }, { r: "turn", a: 12, o: [8, 12] }],
    ["path", { d: "M10.8 14.8 14 18" }, { r: "turn", a: 12, o: [8, 12] }],
    ["path", { d: "M16 12h-2" }, { r: "fade", o: [18, 12] }],
    ["path", { d: "M22 12h-2" }, { r: "fade", d: 0.1, o: [18, 12] }],
  ],
});
