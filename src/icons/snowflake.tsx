import { createIcon } from "../runtime/createIcon.js";

export const Snowflake = createIcon("Snowflake", "snowflake", {
  nodes: [
    ["path", { d: "m10 20-1.25-2.5L6 18" }, { r: "spin", a: 60, o: [12, 12] }],
    ["path", { d: "M10 4 8.75 6.5 6 6" }, { r: "spin", a: 60, o: [12, 12] }],
    ["path", { d: "m14 20 1.25-2.5L18 18" }, { r: "spin", a: 60, o: [12, 12] }],
    ["path", { d: "m14 4 1.25 2.5L18 6" }, { r: "spin", a: 60, o: [12, 12] }],
    ["path", { d: "m17 21-3-6h-4" }, { r: "spin", a: 60, o: [12, 12] }],
    ["path", { d: "m17 3-3 6 1.5 3" }, { r: "spin", a: 60, o: [12, 12] }],
    ["path", { d: "M2 12h6.5L10 9" }, { r: "spin", a: 60, o: [12, 12] }],
    ["path", { d: "m20 10-1.5 2 1.5 2" }, { r: "spin", a: 60, o: [12, 12] }],
    ["path", { d: "M22 12h-6.5L14 15" }, { r: "spin", a: 60, o: [12, 12] }],
    ["path", { d: "m4 10 1.5 2L4 14" }, { r: "spin", a: 60, o: [12, 12] }],
    ["path", { d: "m7 21 3-6-1.5-3" }, { r: "spin", a: 60, o: [12, 12] }],
    ["path", { d: "m7 3 3 6h4" }, { r: "spin", a: 60, o: [12, 12] }],
  ],
});
