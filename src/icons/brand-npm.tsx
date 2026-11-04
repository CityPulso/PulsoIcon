import { createIcon } from "../runtime/createIcon.js";

export const BrandNpm = createIcon("BrandNpm", "brand-npm", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7.5 17V7.5h9V17" }, { r: "draw", d: 0.05, o: [12, 12] }],
    ["path", { d: "M12 11.5V17" }, { r: "grow", d: 0.25, o: [12, 17] }],
  ],
});
