import { createIcon } from "../runtime/createIcon.js";

export const CaseLower = createIcon("CaseLower", "case-lower", {
  text: true,
  nodes: [
    ["path", { d: "M10 9v7" }, { r: "bounce", y: -1, a: 2, o: [6.5, 12.5] }],
    ["path", { d: "M14 6v10" }, { r: "bounce", d: 0.1, y: -1, a: 2, o: [17.5, 11] }],
    ["circle", { cx: "17.5", cy: "12.5", r: "3.5" }, { r: "bounce", d: 0.1, y: -1, a: 2, o: [17.5, 11] }],
    ["circle", { cx: "6.5", cy: "12.5", r: "3.5" }, { r: "bounce", y: -1, a: 2, o: [6.5, 12.5] }],
  ],
});
