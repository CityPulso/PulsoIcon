import { createIcon } from "../runtime/createIcon.js";

export const Brackets = createIcon("Brackets", "brackets", {
  nodes: [
    ["path", { d: "M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3" }, { r: "slide", x: 1, a: 1.5, o: [18, 12] }],
    ["path", { d: "M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3" }, { r: "slide", x: -1, a: 1.5, o: [6, 12] }],
  ],
});
