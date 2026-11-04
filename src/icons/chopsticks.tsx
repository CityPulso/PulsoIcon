import { createIcon } from "../runtime/createIcon.js";

export const Chopsticks = createIcon("Chopsticks", "chopsticks", {
  nodes: [
    ["path", { d: "m3 7 15.5 14" }, { r: "press", a: 0.04, o: [10.75, 14] }],
    ["path", { d: "m7 3 14 15.5" }, { r: "turn", a: -5, o: [7, 3] }],
  ],
});
