import { createIcon } from "../runtime/createIcon.js";

export const Xray = createIcon("Xray", "xray", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 6v12" }, { r: "flicker", o: [12, 12] }],
    ["path", { d: "M7.5 9c1.5-1 3-1.5 4.5-1.5S15 8 16.5 9" }, { r: "flicker", d: 0.05, o: [12, 8.5] }],
    ["path", { d: "M7.5 12.5c1.5-1 3-1.5 4.5-1.5s3 .5 4.5 1.5" }, { r: "flicker", d: 0.1, o: [12, 12] }],
    ["path", { d: "M8.5 16c1.2-.7 2.3-1 3.5-1s2.3.3 3.5 1" }, { r: "flicker", d: 0.15, o: [12, 15.5] }],
  ],
});
