import { createIcon } from "../runtime/createIcon.js";

export const SquaresSubtract = createIcon("SquaresSubtract", "squares-subtract", {
  nodes: [
    ["path", { d: "M10 22a2 2 0 0 1-2-2" }, { r: "fade", d: 0.05, o: [15, 15] }],
    ["path", { d: "M16 22h-2" }, { r: "fade", d: 0.08, o: [15, 15] }],
    ["path", { d: "M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z" }, { r: "slide", x: -1, y: -1, a: 1.5, o: [9, 9] }],
    ["path", { d: "M20 8a2 2 0 0 1 2 2" }, { r: "fade", d: 0.11, o: [15, 15] }],
    ["path", { d: "M22 14v2" }, { r: "fade", d: 0.14, o: [15, 15] }],
    ["path", { d: "M22 20a2 2 0 0 1-2 2" }, { r: "fade", d: 0.17, o: [15, 15] }],
  ],
});
