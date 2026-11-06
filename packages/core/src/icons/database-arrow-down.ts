import { icon } from "../icon.js";

export const DatabaseArrowDown = icon("DatabaseArrowDown", "database-arrow-down", {
  nodes: [
    ["path", { d: "m16 19 3 3 3-3" }, { r: "bounce", d: 0.15, y: 1, a: 2, o: [19, 19] }],
    ["path", { d: "M19 16v6" }, { r: "bounce", d: 0.15, y: 1, a: 2, o: [19, 19] }],
    ["path", { d: "M21 12.536V5" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["path", { d: "M3 12A9 3 0 0 0 15.182 14.806" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["path", { d: "M3 5V19A9 3 0 0 0 13.318 21.968" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }, { r: "float", a: 1, o: [12, 5] }],
  ],
});
