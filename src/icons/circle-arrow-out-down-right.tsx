import { createIcon } from "../runtime/createIcon.js";

export const CircleArrowOutDownRight = createIcon("CircleArrowOutDownRight", "circle-arrow-out-down-right", {
  nodes: [
    ["path", { d: "M12 22a10 10 0 1 1 10-10" }, { r: "spin", a: 45, o: [12, 12] }],
    ["path", { d: "M22 22 12 12" }, { r: "shoot", d: 0.1, x: 1, y: 1, a: 3, o: [17, 17] }],
    ["path", { d: "M22 16v6h-6" }, { r: "shoot", d: 0.1, x: 1, y: 1, a: 3, o: [17, 17] }],
  ],
});
