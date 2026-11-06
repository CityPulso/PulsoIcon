import { icon } from "../icon.js";

export const PanelRightOpen = icon("PanelRightOpen", "panel-right-open", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M15 3v18" }, { r: "grow", d: 0.05, o: [15, 12] }],
    ["path", { d: "m10 15-3-3 3-3" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [8.5, 12] }],
  ],
});
