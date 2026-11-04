import { createIcon } from "../runtime/createIcon.js";

export const AppsSparkle = createIcon("AppsSparkle", "apps-sparkle", {
  nodes: [
    ["rect", { x: "4", y: "4", width: "6", height: "6", rx: "1" }, { r: "pop", d: 0.1, a: 0.1, o: [7, 7] }],
    ["rect", { x: "4", y: "14", width: "6", height: "6", rx: "1" }, { r: "pop", d: 0.15, a: 0.1, o: [7, 17] }],
    ["rect", { x: "14", y: "14", width: "6", height: "6", rx: "1" }, { r: "pop", d: 0.2, a: 0.1, o: [17, 17] }],
    ["path", { d: "M17 10.5a3.5 3.5 0 0 1 3.5-3.5a3.5 3.5 0 0 1-3.5-3.5a3.5 3.5 0 0 1-3.5 3.5a3.5 3.5 0 0 1 3.5 3.5" }, { r: "twinkle", o: [17, 7] }],
  ],
});
