import { createIcon } from "../runtime/createIcon.js";

export const RepeatOff = createIcon("RepeatOff", "repeat-off", {
  nodes: [
    ["path", { d: "M11.656 6H21l-4-4" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M17.898 17.898A4 4 0 0 1 17 18H3l4-4" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M21 13v1a4 4 0 0 1-.171 1.159" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "m21 6-4 4" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "M3 11v-1a4 4 0 0 1 3.102-3.898" }, { r: "spin", a: 90, o: [12, 12] }],
    ["path", { d: "m7 22-4-4" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
