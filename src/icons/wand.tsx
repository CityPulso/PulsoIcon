import { createIcon } from "../runtime/createIcon.js";

export const Wand = createIcon("Wand", "wand", {
  nodes: [
    ["path", { d: "M15 4V2" }, { r: "twinkle", d: 0.05, o: [15, 3] }],
    ["path", { d: "M15 16v-2" }, { r: "twinkle", d: 0.08, o: [15, 15] }],
    ["path", { d: "M8 9h2" }, { r: "twinkle", d: 0.11, o: [9, 9] }],
    ["path", { d: "M20 9h2" }, { r: "twinkle", d: 0.14, o: [21, 9] }],
    ["path", { d: "M17.8 11.8 19 13" }, { r: "twinkle", d: 0.17, o: [18.4, 12.4] }],
    ["path", { d: "M15 9h.01" }, { r: "twinkle", d: 0.2, o: [15.005, 9] }],
    ["path", { d: "M17.8 6.2 19 5" }, { r: "twinkle", d: 0.23, o: [18.4, 5.6] }],
    ["path", { d: "m3 21 9-9" }, { r: "tilt", a: 10, o: [3, 21] }],
    ["path", { d: "M12.2 6.2 11 5" }, { r: "twinkle", d: 0.26, o: [11.6, 5.6] }],
  ],
});
