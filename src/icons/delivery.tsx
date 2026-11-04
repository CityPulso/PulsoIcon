import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "delivery" (MIT, Copyright (c) 2021 Luca Burgio).
export const Delivery = createIcon("Delivery", "delivery", {
  nodes: [
    ["path", { d: "M2 4H18C19.1045 4 19.9999 4.89543 20 5.99999L20 18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V12" }, { r: "press", a: 0.08, o: [11, 12] }],
    ["path", { d: "M12 9V4" }, { r: "draw", d: 0.15, o: [12, 6.5] }],
    ["path", { d: "M8 8H3" }, { r: "draw", d: 0.25, o: [5.5, 8] }],
  ],
});
