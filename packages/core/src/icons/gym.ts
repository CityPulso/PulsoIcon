import { icon } from "../icon.js";

export const Gym = icon("Gym", "gym", {
  nodes: [
    ["path", { d: "M3 4h18" }, { r: "bounce", y: -1, a: 1.5, o: [12, 7] }],
    ["path", { d: "M5 2v4" }, { r: "bounce", y: -1, a: 1.5, o: [12, 7] }],
    ["path", { d: "M19 2v4" }, { r: "bounce", y: -1, a: 1.5, o: [12, 7] }],
    ["path", { d: "M8 4l1.5 6h5L16 4" }, { r: "bounce", y: -1, a: 1.5, o: [12, 7] }],
    ["circle", { cx: "12", cy: "7", r: "1" }, { r: "bounce", y: -1, a: 1.5, o: [12, 7] }],
    ["path", { d: "M12 10v5" }, { r: "press", d: 0.05, a: 0.05, o: [12, 21] }],
    ["path", { d: "m8 21 4-6 4 6" }, { r: "press", d: 0.05, a: 0.05, o: [12, 21] }],
  ],
});
