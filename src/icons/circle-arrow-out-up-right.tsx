import { createIcon } from "../runtime/createIcon.js";

export const CircleArrowOutUpRight = createIcon("CircleArrowOutUpRight", "circle-arrow-out-up-right", {
  nodes: [
    ["path", { d: "M22 12A10 10 0 1 1 12 2" }, { r: "spin", a: -45, o: [12, 12] }],
    ["path", { d: "M22 2 12 12" }, { r: "shoot", d: 0.1, x: 1, y: -1, a: 3, o: [17, 7] }],
    ["path", { d: "M16 2h6v6" }, { r: "shoot", d: 0.1, x: 1, y: -1, a: 3, o: [17, 7] }],
  ],
});
