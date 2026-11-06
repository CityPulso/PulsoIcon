import { icon } from "../icon.js";

export const PanelTopClose = icon("PanelTopClose", "panel-top-close", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M3 9h18" }, { r: "growX", d: 0.05, o: [12, 9] }],
    ["path", { d: "m9 16 3-3 3 3" }, { r: "slide", d: 0.1, y: -1, a: 1.5, o: [12, 14.5] }],
  ],
});
