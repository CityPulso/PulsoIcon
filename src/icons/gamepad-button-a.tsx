import { createIcon } from "../runtime/createIcon.js";

export const GamepadButtonA = createIcon("GamepadButtonA", "gamepad-button-a", {
  nodes: [
    ["circle", { cx: "12", cy: "3.5", r: "1.5" }, { r: "pop", d: 0.15, o: [12, 3.5] }],
    ["circle", { cx: "4", cy: "9", r: "1.5" }, { r: "pop", d: 0.21, o: [4, 9] }],
    ["circle", { cx: "20", cy: "9", r: "1.5" }, { r: "pop", d: 0.27, o: [20, 9] }],
    ["circle", { cx: "12", cy: "15.5", r: "6" }, { r: "press", a: 0.12, o: [12, 15.5] }],
    ["path", { d: "m10 18 2-5 2 5" }, { r: "press", a: 0.12, o: [12, 15.5] }],
    ["path", { d: "M10.8 16.5h2.4" }, { r: "press", a: 0.12, o: [12, 15.5] }],
  ],
});
