import { createIcon } from "../runtime/createIcon.js";

export const SquareDashedText = createIcon("SquareDashedText", "square-dashed-text", {
  nodes: [
    ["path", { d: "M14 21h1" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M14 3h1" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M19 3a2 2 0 0 1 2 2" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M21 14v1" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M21 19a2 2 0 0 1-2 2" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M21 9v1" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M3 14v1" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M3 9v1" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M5 21a2 2 0 0 1-2-2" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M5 3a2 2 0 0 0-2 2" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M7 12h10" }, { r: "growX", d: 0.15, o: [7, 12] }],
    ["path", { d: "M7 16h6" }, { r: "growX", d: 0.2, o: [7, 12] }],
    ["path", { d: "M7 8h8" }, { r: "growX", d: 0.1, o: [7, 12] }],
    ["path", { d: "M9 21h1" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M9 3h1" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
