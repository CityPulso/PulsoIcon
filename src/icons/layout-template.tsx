import { createIcon } from "../runtime/createIcon.js";

export const LayoutTemplate = createIcon("LayoutTemplate", "layout-template", {
  nodes: [
    ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1" }, { r: "growX", o: [3, 6.5] }],
    ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1" }, { r: "pop", d: 0.1, o: [7.5, 17.5] }],
    ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1" }, { r: "pop", d: 0.18, o: [18.5, 17.5] }],
  ],
});
