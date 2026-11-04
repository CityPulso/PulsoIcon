import { createIcon } from "../runtime/createIcon.js";

export const GamepadButtonX = createIcon("GamepadButtonX", "gamepad-button-x", {
  nodes: [
    ["circle", { cx: "20.5", cy: "12", r: "1.5" }, { r: "pop", d: 0.15, o: [20.5, 12] }],
    ["circle", { cx: "15", cy: "4", r: "1.5" }, { r: "pop", d: 0.21, o: [15, 4] }],
    ["circle", { cx: "15", cy: "20", r: "1.5" }, { r: "pop", d: 0.27, o: [15, 20] }],
    ["circle", { cx: "8.5", cy: "12", r: "6" }, { r: "press", a: 0.12, o: [8.5, 12] }],
    ["path", { d: "m6.5 9.5 4 5" }, { r: "press", a: 0.12, o: [8.5, 12] }],
    ["path", { d: "m10.5 9.5-4 5" }, { r: "press", a: 0.12, o: [8.5, 12] }],
  ],
});
