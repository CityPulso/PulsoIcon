import { createIcon } from "../runtime/createIcon.js";

export const FireTruck = createIcon("FireTruck", "fire-truck", {
  nodes: [
    ["path", { d: "M14 18V9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2M15 18H9" }, { r: "slide", x: 1, a: 1, o: [12, 12] }],
    ["path", { d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" }, { r: "slide", x: 1, a: 1, o: [12, 12] }],
    ["path", { d: "M3 3.5h10M3 6h10M5.5 3.5V6M8 3.5V6M10.5 3.5V6" }, { r: "turn", a: -12, d: 0.1, o: [3, 5] }],
    ["circle", { cx: "17", cy: "18", r: "2" }, { r: "spin", a: 360, o: [17, 18] }],
    ["circle", { cx: "7", cy: "18", r: "2" }, { r: "spin", a: 360, o: [7, 18] }],
  ],
});
