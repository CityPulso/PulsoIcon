import { createIcon } from "../runtime/createIcon.js";

export const DatabaseZap = createIcon("DatabaseZap", "database-zap", {
  nodes: [
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }, { r: "float", a: 1, o: [12, 5] }],
    ["path", { d: "M3 5V19A9 3 0 0 0 15 21.84" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["path", { d: "M21 5V8" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["path", { d: "M21 12L18 17H22L19 22" }, { r: "flicker", d: 0.15, o: [20, 17] }],
    ["path", { d: "M3 12A9 3 0 0 0 14.59 14.87" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
  ],
});
