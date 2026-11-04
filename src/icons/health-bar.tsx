import { createIcon } from "../runtime/createIcon.js";

export const HealthBar = createIcon("HealthBar", "health-bar", {
  nodes: [
    ["path", { d: "M6 15.5 3 12.5a2.12 2.12 0 0 1 3-3 2.12 2.12 0 0 1 3 3z" }, { r: "beat", a: 0.2, o: [6, 12.5] }],
    ["rect", { x: "12", y: "9", width: "10", height: "6", rx: "1.5" }, { r: "press", a: 0.04, o: [17, 12] }],
    ["path", { d: "M15 12h3" }, { r: "growX", d: 0.15, o: [15, 12] }],
  ],
});
