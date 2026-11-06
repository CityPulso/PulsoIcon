import { icon } from "../icon.js";

export const RobotArm = icon("RobotArm", "robot-arm", {
  nodes: [
    ["path", { d: "M12 21 7.5 8.322" }, { r: "press", a: 0.03, o: [8, 21] }],
    ["path", { d: "m14 7 1.75-3.767a.5.5 0 0 1 .662-.172L20 5.005" }, { r: "turn", a: -14, o: [6, 7] }],
    ["path", { d: "m20 8.998-3.588 1.944a.5.5 0 0 1-.662-.172L14 7H8" }, { r: "turn", a: -14, o: [6, 7] }],
    ["path", { d: "M3.486 21h10" }, { r: "press", a: 0.03, o: [8, 21] }],
    ["path", { d: "M5 21V8.732" }, { r: "press", a: 0.03, o: [8, 21] }],
    ["circle", { cx: "6", cy: "7", r: "2" }, { r: "spin", a: 90, o: [6, 7] }],
  ],
});
