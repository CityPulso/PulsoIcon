import { icon } from "../icon.js";

export const Joystick = icon("Joystick", "joystick", {
  nodes: [
    ["path", { d: "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z" }, { r: "press", a: 0.04, o: [12, 17] }],
    ["path", { d: "M6 15v-2" }, { r: "press", a: 0.04, o: [12, 17] }],
    ["path", { d: "M12 15V9" }, { r: "turn", a: 20, o: [12, 15] }],
    ["circle", { cx: "12", cy: "6", r: "3" }, { r: "turn", a: 20, o: [12, 15] }],
  ],
});
