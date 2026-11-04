import { createIcon } from "../runtime/createIcon.js";

export const WholeWord = createIcon("WholeWord", "whole-word", {
  nodes: [
    ["circle", { cx: "7", cy: "12", r: "3" }, { r: "bounce", y: -1, a: 1.5, o: [7, 12] }],
    ["path", { d: "M10 9v6" }, { r: "bounce", y: -1, a: 1.5, o: [7, 12] }],
    ["circle", { cx: "17", cy: "12", r: "3" }, { r: "bounce", d: 0.1, y: -1, a: 1.5, o: [17, 11] }],
    ["path", { d: "M14 7v8" }, { r: "bounce", d: 0.1, y: -1, a: 1.5, o: [17, 11] }],
    ["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" }, { r: "growX", d: 0.15, o: [12, 18] }],
  ],
});
