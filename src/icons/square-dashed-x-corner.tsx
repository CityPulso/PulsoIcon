import { createIcon } from "../runtime/createIcon.js";

export const SquareDashedXCorner = createIcon("SquareDashedXCorner", "square-dashed-x-corner", {
  nodes: [
    ["path", { d: "M14 3h1" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "m16 16 5 5" }, { r: "draw", d: 0.15, o: [18.5, 18.5] }],
    ["path", { d: "M19 3a2 2 0 012 2" }, { r: "fade", d: 0.03, o: [12, 12] }],
    ["path", { d: "m21 16-5 5" }, { r: "draw", d: 0.25, o: [18.5, 18.5] }],
    ["path", { d: "M21 9v1" }, { r: "fade", d: 0.06, o: [12, 12] }],
    ["path", { d: "M3 14v1" }, { r: "fade", d: 0.09, o: [12, 12] }],
    ["path", { d: "M3 9v1" }, { r: "fade", d: 0.12, o: [12, 12] }],
    ["path", { d: "M5 21a2 2 0 01-2-2" }, { r: "fade", d: 0.15, o: [12, 12] }],
    ["path", { d: "M5 3a2 2 0 00-2 2" }, { r: "fade", d: 0.18, o: [12, 12] }],
    ["path", { d: "M9 21h1" }, { r: "fade", d: 0.21, o: [12, 12] }],
    ["path", { d: "M9 3h1" }, { r: "fade", d: 0.24, o: [12, 12] }],
  ],
});
