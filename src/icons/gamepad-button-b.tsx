import { createIcon } from "../runtime/createIcon.js";

export const GamepadButtonB = createIcon("GamepadButtonB", "gamepad-button-b", {
  nodes: [
    ["circle", { cx: "3.5", cy: "12", r: "1.5" }, { r: "pop", d: 0.15, o: [3.5, 12] }],
    ["circle", { cx: "9", cy: "20", r: "1.5" }, { r: "pop", d: 0.21, o: [9, 20] }],
    ["circle", { cx: "9", cy: "4", r: "1.5" }, { r: "pop", d: 0.27, o: [9, 4] }],
    ["circle", { cx: "15.5", cy: "12", r: "6" }, { r: "press", a: 0.12, o: [15.5, 12] }],
    ["path", { d: "M14 12h1.75a1.25 1.25 0 0 1 0 2.5H14v-5h1.5a1.25 1.25 0 0 1 0 2.5" }, { r: "press", a: 0.12, o: [15.5, 12] }],
  ],
});
