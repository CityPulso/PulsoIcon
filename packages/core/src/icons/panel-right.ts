import { icon } from "../icon.js";

export const PanelRight = icon("PanelRight", "panel-right", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M15 3v18" }, { r: "slide", d: 0.05, x: -1, a: 2, o: [15, 12] }],
  ],
});
