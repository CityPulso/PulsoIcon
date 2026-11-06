import { icon } from "../icon.js";

export const PanelBottomSplit = icon("PanelBottomSplit", "panel-bottom-split", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M3 15h18" }, { r: "slide", d: 0.05, y: -1, a: 2, o: [12, 15] }],
    ["path", { d: "M12 15v6" }, { r: "grow", d: 0.15, o: [12, 21] }],
  ],
});
