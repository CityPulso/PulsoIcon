import { createIcon } from "../runtime/createIcon.js";

export const LetterSpacing = createIcon("LetterSpacing", "letter-spacing", {
  nodes: [
    ["path", { d: "M15 14H9" }, { r: "fade", d: 0.1, o: [12, 12] }],
    ["path", { d: "M21 3v18" }, { r: "slide", x: 1, a: 1.5, o: [21, 12] }],
    ["path", { d: "M3 3v18" }, { r: "slide", x: -1, a: 1.5, o: [3, 12] }],
    ["path", { d: "m8 16 3.453-7.648a.6.6 0 011.094.001L16 16" }, { r: "fade", d: 0.1, o: [12, 12] }],
  ],
});
