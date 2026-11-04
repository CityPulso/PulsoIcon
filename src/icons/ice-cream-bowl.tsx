import { createIcon } from "../runtime/createIcon.js";

export const IceCreamBowl = createIcon("IceCreamBowl", "ice-cream-bowl", {
  nodes: [
    ["path", { d: "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0" }, { r: "press", d: 0.2, a: 0.04, o: [12, 21] }],
    ["path", { d: "M12.14 11a3.5 3.5 0 1 1 6.71 0" }, { r: "jelly", d: 0.1, a: 0.1, o: [15, 11] }],
    ["path", { d: "M15.5 6.5a3.5 3.5 0 1 0-7 0" }, { r: "drop", a: 3, o: [12, 4.75] }],
  ],
});
