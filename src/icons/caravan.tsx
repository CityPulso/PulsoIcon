import { createIcon } from "../runtime/createIcon.js";

export const Caravan = createIcon("Caravan", "caravan", {
  nodes: [
    ["path", { d: "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" }, { r: "slide", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2" }, { r: "slide", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9" }, { r: "slide", x: 1, a: 1.5, o: [12, 12] }],
    ["circle", { cx: "8", cy: "19", r: "2" }, { r: "roll", x: 1, a: 1.5, o: [8, 19] }],
  ],
});
