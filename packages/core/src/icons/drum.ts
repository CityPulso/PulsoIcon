import { icon } from "../icon.js";

export const Drum = icon("Drum", "drum", {
  nodes: [
    ["path", { d: "m2 2 8 8" }, { r: "turn", a: -20, o: [8, 8] }],
    ["path", { d: "m22 2-8 8" }, { r: "turn", d: 0.08, a: 20, o: [16, 8] }],
    ["ellipse", { cx: "12", cy: "9", rx: "10", ry: "5" }, { r: "press", d: 0.2, a: 0.1, o: [12, 9] }],
    ["path", { d: "M7 13.4v7.9" }, { r: "press", d: 0.2, a: 0.04, o: [12, 22] }],
    ["path", { d: "M12 14v8" }, { r: "press", d: 0.2, a: 0.04, o: [12, 22] }],
    ["path", { d: "M17 13.4v7.9" }, { r: "press", d: 0.2, a: 0.04, o: [12, 22] }],
    ["path", { d: "M2 9v8a10 5 0 0 0 20 0V9" }, { r: "press", d: 0.2, a: 0.04, o: [12, 22] }],
  ],
});
