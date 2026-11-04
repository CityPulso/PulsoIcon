import { createIcon } from "../runtime/createIcon.js";

export const Skiing = createIcon("Skiing", "skiing", {
  nodes: [
    ["circle", { cx: "14", cy: "3.5", r: "1.5" }, { r: "slide", x: 1, y: 0.25, a: 1.5, o: [12, 12] }],
    ["path", { d: "M12.5 6.5 10 10.5l3 2-1.5 2.5" }, { r: "slide", x: 1, y: 0.25, a: 1.5, o: [12, 12] }],
    ["path", { d: "m8.5 8 4-1.5 3.5 2" }, { r: "slide", x: 1, y: 0.25, a: 1.5, o: [12, 12] }],
    ["path", { d: "m16 8.5 1 8M8.5 8 5 13" }, { r: "slide", x: 1, y: 0.25, a: 1.5, o: [12, 12] }],
    ["path", { d: "m2 13.5 17 4.25a1.5 1.5 0 0 0 1.5-1M3 17l16.5 4.1a1.5 1.5 0 0 0 1.5-1" }, { r: "slide", d: 0.05, x: 1, y: 0.25, a: 1.5, o: [12, 12] }],
  ],
});
