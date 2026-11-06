import { icon } from "../icon.js";

export const SmartphoneCharging = icon("SmartphoneCharging", "smartphone-charging", {
  nodes: [
    ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12.667 8 10 12h4l-2.667 4" }, { r: "flicker", d: 0.05, o: [12, 12] }],
  ],
});
