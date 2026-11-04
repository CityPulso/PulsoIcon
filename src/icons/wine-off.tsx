import { createIcon } from "../runtime/createIcon.js";

export const WineOff = createIcon("WineOff", "wine-off", {
  nodes: [
    ["path", { d: "M8 22h8" }, { r: "sway", a: 6, o: [12, 22] }],
    ["path", { d: "M7 10h3m7 0h-1.343" }, { r: "sway", a: 6, o: [12, 22] }],
    ["path", { d: "M12 15v7" }, { r: "sway", a: 6, o: [12, 22] }],
    [
      "path",
      { d: "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198" },
      { r: "sway", a: 6, o: [12, 22] },
    ],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
});
