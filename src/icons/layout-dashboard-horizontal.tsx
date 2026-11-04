import { createIcon } from "../runtime/createIcon.js";

export const LayoutDashboardHorizontal = createIcon("LayoutDashboardHorizontal", "layout-dashboard-horizontal", {
  nodes: [
    ["rect", { width: "9", height: "7", x: "3", y: "3", rx: "1" }, { r: "growX", o: [3, 6.5] }],
    ["rect", { width: "5", height: "7", x: "16", y: "3", rx: "1" }, { r: "grow", d: 0.06, o: [18.5, 3] }],
    ["rect", { width: "9", height: "7", x: "12", y: "14", rx: "1" }, { r: "growX", d: 0.12, o: [21, 17.5] }],
    ["rect", { width: "5", height: "7", x: "3", y: "14", rx: "1" }, { r: "grow", d: 0.18, o: [5.5, 21] }],
  ],
});
