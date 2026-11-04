import { createIcon } from "../runtime/createIcon.js";

export const Cave = createIcon("Cave", "cave", {
  nodes: [
    ["path", { d: "M2 20 6 9l4-4 5 1 4 5 3 9Z" }, { r: "rise", a: 2, o: [12, 12] }],
    ["path", { d: "M8 20v-3a4 4 0 0 1 8 0v3" }, { r: "fade", d: 0.15, o: [12, 17] }],
  ],
});
