import { createIcon } from "../runtime/createIcon.js";

export const CookingPot = createIcon("CookingPot", "cooking-pot", {
  nodes: [
    ["path", { d: "M2 12h20" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "m4 8 16-4" }, { r: "lift", d: 0.05, o: [12, 6] }],
    ["path", { d: "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" }, { r: "float", d: 0.1, a: 1, o: [11.514, 4.39] }],
  ],
});
