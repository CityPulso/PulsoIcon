import { createIcon } from "../runtime/createIcon.js";

export const PanelTop = createIcon("PanelTop", "panel-top", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M3 9h18" }, { r: "slide", d: 0.05, y: 1, a: 2, o: [12, 9] }],
  ],
});
