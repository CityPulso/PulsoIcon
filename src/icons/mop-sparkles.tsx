import { createIcon } from "../runtime/createIcon.js";

export const MopSparkles = createIcon("MopSparkles", "mop-sparkles", {
  nodes: [
    ["path", { d: "M10 22a3 3 0 01-3-3" }, { r: "fade", o: [8.5, 20.5] }],
    ["path", { d: "M10 22c2.761 0 5-1.79 5-4-4.42 0-4.08-5-8.5-5a4.501 4.501 0 000 9z" }, { r: "tilt", a: 12, o: [17, 7] }],
    ["path", { d: "M10 3H8" }, { r: "twinkle", d: 0.2, o: [9, 3] }],
    ["path", { d: "M12.5 11.5 22 2" }, { r: "tilt", a: 12, o: [17, 7] }],
    ["path", { d: "M20 13v4" }, { r: "twinkle", d: 0.24, o: [20, 15] }],
    ["path", { d: "M22 15h-4" }, { r: "twinkle", d: 0.28, o: [20, 15] }],
    ["path", { d: "M4 5v4" }, { r: "twinkle", d: 0.32, o: [4, 7] }],
    ["path", { d: "M6 7H2" }, { r: "twinkle", d: 0.36, o: [4, 7] }],
    ["path", { d: "m6.98 13.02 2.665-2.664a1.21 1.21 0 011.71 0l2.29 2.288a1.21 1.21 0 010 1.712l-2.088 2.087" }, { r: "tilt", a: 12, o: [17, 7] }],
    ["path", { d: "M9 2v2" }, { r: "twinkle", d: 0.4, o: [9, 3] }],
  ],
});
