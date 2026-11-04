import { createIcon } from "../runtime/createIcon.js";

export const SmartphoneHotspot = createIcon("SmartphoneHotspot", "smartphone-hotspot", {
  nodes: [
    ["rect", { x: "8", y: "11", width: "8", height: "11", rx: "2" }, { r: "press", a: 0.04, o: [12, 16.5] }],
    ["path", { d: "M12 19h.01" }, { r: "flicker", d: 0.1, o: [12, 19] }],
    ["path", { d: "M9.5 7.5a3.5 3.5 0 0 1 5 0" }, { r: "draw", d: 0.1, o: [12, 7] }],
    ["path", { d: "M6.5 4.5a7.8 7.8 0 0 1 11 0" }, { r: "draw", d: 0.25, o: [12, 4] }],
  ],
});
