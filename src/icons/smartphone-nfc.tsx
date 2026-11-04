import { createIcon } from "../runtime/createIcon.js";

export const SmartphoneNfc = createIcon("SmartphoneNfc", "smartphone-nfc", {
  nodes: [
    ["rect", { width: "7", height: "12", x: "2", y: "6", rx: "1" }, { r: "press", a: 0.04, o: [5.5, 12] }],
    ["path", { d: "M13 8.32a7.43 7.43 0 0 1 0 7.36" }, { r: "draw", d: 0.05, o: [13.488, 12] }],
    ["path", { d: "M16.46 6.21a11.76 11.76 0 0 1 0 11.58" }, { r: "draw", d: 0.12, o: [17.222, 12] }],
    ["path", { d: "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" }, { r: "draw", d: 0.19, o: [20.962, 12] }],
  ],
});
