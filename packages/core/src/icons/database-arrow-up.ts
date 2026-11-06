import { icon } from "../icon.js";

export const DatabaseArrowUp = icon("DatabaseArrowUp", "database-arrow-up", {
  nodes: [
    ["path", { d: "M19 22v-6" }, { r: "bounce", d: 0.15, y: -1, a: 2, o: [19, 19] }],
    ["path", { d: "M21 12.536V5" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["path", { d: "m22 19-3-3-3 3" }, { r: "bounce", d: 0.15, y: -1, a: 2, o: [19, 19] }],
    ["path", { d: "M3 12A9 3 0 0 0 14.457 14.886" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["path", { d: "M3 5V19A9 3 0 0 0 13.318 21.968" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }, { r: "float", a: 1, o: [12, 5] }],
  ],
});
