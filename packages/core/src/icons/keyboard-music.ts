import { icon } from "../icon.js";

export const KeyboardMusic = icon("KeyboardMusic", "keyboard-music", {
  nodes: [
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M6 8h4" }, { r: "growX", d: 0.25, o: [8, 8] }],
    ["path", { d: "M14 8h.01" }, { r: "pop", d: 0.3, o: [14.005, 8] }],
    ["path", { d: "M18 8h.01" }, { r: "pop", d: 0.35, o: [18.005, 8] }],
    ["path", { d: "M2 12h20" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M6 12v4" }, { r: "grow", d: 0.05, o: [12, 12] }],
    ["path", { d: "M10 12v4" }, { r: "grow", d: 0.1, o: [12, 12] }],
    ["path", { d: "M14 12v4" }, { r: "grow", d: 0.15, o: [12, 12] }],
    ["path", { d: "M18 12v4" }, { r: "grow", d: 0.2, o: [12, 12] }],
  ],
});
