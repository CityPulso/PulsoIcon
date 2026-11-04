import { createIcon } from "../runtime/createIcon.js";

export const Bee = createIcon("Bee", "bee", {
  svg: { r: "wobble", a: 6 },
  nodes: [
    ["ellipse", { cx: "12", cy: "14", rx: "4", ry: "5.5" }],
    ["circle", { cx: "12", cy: "6.5", r: "2" }],
    ["path", { d: "M8.2 12.5h7.6" }],
    ["path", { d: "M8.2 15.5h7.6" }],
    ["path", { d: "M12 19.5V21" }],
    ["path", { d: "M10.8 4.9 9.5 2.5" }],
    ["path", { d: "M13.2 4.9l1.3-2.4" }],
    ["path", { d: "M8.2 11.5C5 12 2.5 10 3 8s4-1.5 6 1" }, { r: "blink", o: [8.5, 10] }],
    ["path", { d: "M15.8 11.5c3.2.5 5.7-1.5 5.2-3.5s-4-1.5-6 1" }, { r: "blink", o: [15.5, 10] }],
  ],
});
