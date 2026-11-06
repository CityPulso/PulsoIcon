import { icon } from "../icon.js";

export const CircleEllipsis = icon("CircleEllipsis", "circle-ellipsis", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M17 12h.01" }, { r: "bounce", d: 0.16, y: -1, a: 1.5, o: [17.005, 12] }],
    ["path", { d: "M12 12h.01" }, { r: "bounce", d: 0.08, y: -1, a: 1.5, o: [12.005, 12] }],
    ["path", { d: "M7 12h.01" }, { r: "bounce", y: -1, a: 1.5, o: [7.005, 12] }],
  ],
});
