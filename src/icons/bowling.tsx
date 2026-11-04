import { createIcon } from "../runtime/createIcon.js";

export const Bowling = createIcon("Bowling", "bowling", {
  nodes: [
    [
      "path",
      { d: "M8 2a2 2 0 0 0-2 2c0 1 .5 1.5.5 2.5S5 9 5 12.5C5 16 6 19 6.5 22h3c.5-3 1.5-6 1.5-9.5S9.5 7.5 9.5 6.5 10 5 10 4a2 2 0 0 0-2-2" },
      { r: "wobble", d: 0.35, a: 10, o: [8, 22] },
    ],
    ["path", { d: "M6.5 7h3" }, { r: "wobble", d: 0.35, a: 10, o: [8, 22] }],
    ["circle", { cx: "17", cy: "17", r: "5" }, { r: "roll", x: -1, a: 1.5, o: [17, 17] }],
    ["path", { d: "M15.5 15h.01" }, { r: "roll", x: -1, a: 1.5, o: [17, 17] }],
    ["path", { d: "M17.5 14h.01" }, { r: "roll", x: -1, a: 1.5, o: [17, 17] }],
    ["path", { d: "M18 16.5h.01" }, { r: "roll", x: -1, a: 1.5, o: [17, 17] }],
  ],
});
