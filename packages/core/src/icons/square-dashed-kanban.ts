import { icon } from "../icon.js";

export const SquareDashedKanban = icon("SquareDashedKanban", "square-dashed-kanban", {
  nodes: [
    ["path", { d: "M8 7v7" }, { r: "grow", d: 0.05, o: [8, 7] }],
    ["path", { d: "M12 7v4" }, { r: "grow", d: 0.1, o: [12, 7] }],
    ["path", { d: "M16 7v9" }, { r: "grow", d: 0.15, o: [16, 7] }],
    ["path", { d: "M5 3a2 2 0 0 0-2 2" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M9 3h1" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M14 3h1" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M19 3a2 2 0 0 1 2 2" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M21 9v1" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M21 14v1" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M21 19a2 2 0 0 1-2 2" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M14 21h1" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M9 21h1" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M5 21a2 2 0 0 1-2-2" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M3 14v1" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M3 9v1" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
