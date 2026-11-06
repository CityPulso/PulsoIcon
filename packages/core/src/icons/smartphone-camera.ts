import { icon } from "../icon.js";

export const SmartphoneCamera = icon("SmartphoneCamera", "smartphone-camera", {
  nodes: [
    ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "12", cy: "10", r: "3" }, { r: "blink", d: 0.1, o: [12, 10] }],
    ["path", { d: "M12 18h.01" }, { r: "flicker", d: 0.2, o: [12, 18] }],
  ],
});
