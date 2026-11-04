import { createIcon } from "../runtime/createIcon.js";

export const SquareDashedSparkle = createIcon("SquareDashedSparkle", "square-dashed-sparkle", {
  nodes: [
    ["path", { d: "M5 3a2 2 0 0 0-2 2" }, { r: "fade", d: 0, o: [12, 12] }],
    ["path", { d: "M9 3h1" }, { r: "fade", d: 0.04, o: [12, 12] }],
    ["path", { d: "M14 3h1" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M19 3a2 2 0 0 1 2 2" }, { r: "fade", d: 0.12, o: [12, 12] }],
    ["path", { d: "M21 9v1" }, { r: "fade", d: 0.16, o: [12, 12] }],
    ["path", { d: "M21 14v1" }, { r: "fade", d: 0.2, o: [12, 12] }],
    ["path", { d: "M21 19a2 2 0 0 1-2 2" }, { r: "fade", d: 0.24, o: [12, 12] }],
    ["path", { d: "M15 21h-1" }, { r: "fade", d: 0.28, o: [12, 12] }],
    ["path", { d: "M10 21H9" }, { r: "fade", d: 0.32, o: [12, 12] }],
    ["path", { d: "M5 21a2 2 0 0 1-2-2" }, { r: "fade", d: 0.36, o: [12, 12] }],
    ["path", { d: "M3 15v-1" }, { r: "fade", d: 0.4, o: [12, 12] }],
    ["path", { d: "M3 10V9" }, { r: "fade", d: 0.44, o: [12, 12] }],
    ["path", { d: "M12 17a6.65 6.65 0 0 1 5-5a6.65 6.65 0 0 1-5-5a6.65 6.65 0 0 1-5 5a6.65 6.65 0 0 1 5 5" }, { r: "twinkle", o: [12, 12] }],
  ],
});
