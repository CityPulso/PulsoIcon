import { createIcon } from "../runtime/createIcon.js";

export const SeparatorVertical = createIcon("SeparatorVertical", "separator-vertical", {
  nodes: [
    ["path", { d: "M12 3v18" }, { r: "grow", o: [12, 12] }],
    ["path", { d: "m16 16 4-4-4-4" }, { r: "slide", x: 1, a: 1.5, o: [18, 12] }],
    ["path", { d: "m8 8-4 4 4 4" }, { r: "slide", x: -1, a: 1.5, o: [6, 12] }],
  ],
});
