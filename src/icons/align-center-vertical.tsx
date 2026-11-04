import { createIcon } from "../runtime/createIcon.js";

export const AlignCenterVertical = createIcon("AlignCenterVertical", "align-center-vertical", {
  nodes: [
    ["path", { d: "M12 2v20" }, { r: "grow", o: [12, 12] }],
    ["path", { d: "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" }, { r: "slide", x: -1, a: 1.5, o: [12, 7] }],
    ["path", { d: "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" }, { r: "slide", d: 0.08, x: -1, a: 1.5, o: [12, 7] }],
    ["path", { d: "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [12, 17] }],
    ["path", { d: "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" }, { r: "slide", d: 0.18, x: 1, a: 1.5, o: [12, 17] }],
  ],
});
