import { createIcon } from "../runtime/createIcon.js";

export const Pebbles = createIcon("Pebbles", "pebbles", {
  nodes: [
    ["ellipse", { cx: "6.5", cy: "17.5", rx: "4.5", ry: "3" }, { r: "drop", d: 0, a: 3, o: [6.5, 17.5] }],
    ["ellipse", { cx: "17", cy: "18.5", rx: "4.5", ry: "2.5" }, { r: "drop", d: 0.1, a: 3, o: [17, 18.5] }],
    ["ellipse", { cx: "13", cy: "10.5", rx: "3.5", ry: "2.5" }, { r: "drop", d: 0.2, a: 3, o: [13, 10.5] }],
  ],
});
