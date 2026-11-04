import { createIcon } from "../runtime/createIcon.js";

export const Pillow = createIcon("Pillow", "pillow", {
  nodes: [
    ["path", { d: "M3 6Q12 4 21 6Q22.5 12 21 18Q12 20 3 18Q1.5 12 3 6Z" }, { r: "jelly", a: 0.1, o: [12, 12] }],
    ["path", { d: "m3 6 2 2m16-2-2 2M3 18l2-2m16 2-2-2" }, { r: "jelly", a: 0.1, o: [12, 12] }],
  ],
});
