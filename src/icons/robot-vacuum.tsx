import { createIcon } from "../runtime/createIcon.js";

export const RobotVacuum = createIcon("RobotVacuum", "robot-vacuum", {
  nodes: [
    ["path", { d: "M11 17h2" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M12 12h.01" }, { r: "pop", d: 0.1, o: [12.005, 12] }],
    ["path", { d: "M17 12a5 5 0 00-10 0" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M19 2v2.8" }, { r: "flicker", d: 0.15, o: [12, 3.5] }],
    ["path", { d: "M2 5h2.8" }, { r: "flicker", d: 0.19, o: [12, 3.5] }],
    ["path", { d: "M22 5h-2.8" }, { r: "flicker", d: 0.23, o: [12, 3.5] }],
    ["path", { d: "M5 2v2.8" }, { r: "flicker", d: 0.27, o: [12, 3.5] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "roll", x: 1, a: 2, o: [12, 12] }],
  ],
});
