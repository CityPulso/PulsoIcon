import { createIcon } from "../runtime/createIcon.js";

export const LayoutDashboard = createIcon("LayoutDashboard", "layout-dashboard", {
  nodes: [
    ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1" }, { r: "grow", o: [6.5, 3] }],
    ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1" }, { r: "growX", d: 0.06, o: [14, 5.5] }],
    ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1" }, { r: "grow", d: 0.12, o: [17.5, 21] }],
    ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1" }, { r: "growX", d: 0.18, o: [3, 18.5] }],
  ],
});
