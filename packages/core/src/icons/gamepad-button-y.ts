import { icon } from "../icon.js";

export const GamepadButtonY = icon("GamepadButtonY", "gamepad-button-y", {
  nodes: [
    ["circle", { cx: "12", cy: "20.5", r: "1.5" }, { r: "pop", d: 0.15, o: [12, 20.5] }],
    ["circle", { cx: "20", cy: "15", r: "1.5" }, { r: "pop", d: 0.21, o: [20, 15] }],
    ["circle", { cx: "4", cy: "15", r: "1.5" }, { r: "pop", d: 0.27, o: [4, 15] }],
    ["circle", { cx: "12", cy: "8.5", r: "6" }, { r: "press", a: 0.12, o: [12, 8.5] }],
    ["path", { d: "m10 6 2 2.5 2-2.5" }, { r: "press", a: 0.12, o: [12, 8.5] }],
    ["path", { d: "M12 8.5v2.5" }, { r: "press", a: 0.12, o: [12, 8.5] }],
  ],
});
