import { createIcon } from "../runtime/createIcon.js";

export const ThermometerSnowflake = createIcon("ThermometerSnowflake", "thermometer-snowflake", {
  nodes: [
    ["path", { d: "m10 20-1.25-2.5L6 18" }, { r: "twinkle", d: 0.1, o: [8, 18.75] }],
    ["path", { d: "M10 4 8.75 6.5 6 6" }, { r: "twinkle", d: 0.14, o: [8, 5.25] }],
    ["path", { d: "M10.585 15H10" }, { r: "twinkle", d: 0.18, o: [10.293, 15] }],
    ["path", { d: "M2 12h6.5L10 9" }, { r: "spin", d: 0.05, a: 60, o: [6, 12] }],
    ["path", { d: "M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" }, { r: "pulse", a: 0.05, o: [18, 18] }],
    ["path", { d: "m4 10 1.5 2L4 14" }, { r: "twinkle", d: 0.22, o: [4.75, 12] }],
    ["path", { d: "m7 21 3-6-1.5-3" }, { r: "pulse", a: 0.05, o: [18, 18] }],
    ["path", { d: "m7 3 3 6h2" }, { r: "spin", d: 0.05, a: 60, o: [6, 12] }],
  ],
});
