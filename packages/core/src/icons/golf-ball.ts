import { icon } from "../icon.js";

export const GolfBall = icon("GolfBall", "golf-ball", {
  nodes: [
    ["circle", { cx: "12", cy: "9", r: "7" }, { r: "bounce", y: -1, a: 1, o: [12, 9] }],
    ["path", { d: "M9.5 7.5h.01" }, { r: "bounce", y: -1, a: 1, o: [12, 9] }],
    ["path", { d: "M12 5.5h.01" }, { r: "bounce", y: -1, a: 1, o: [12, 9] }],
    ["path", { d: "M14.5 7.5h.01" }, { r: "bounce", y: -1, a: 1, o: [12, 9] }],
    ["path", { d: "M12 10h.01" }, { r: "bounce", y: -1, a: 1, o: [12, 9] }],
    ["path", { d: "M9 19h6" }, { r: "press", a: 0.2, o: [12, 20] }],
    ["path", { d: "M12 19v3" }, { r: "press", a: 0.2, o: [12, 20] }],
  ],
});
