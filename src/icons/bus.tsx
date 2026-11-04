import { createIcon } from "../runtime/createIcon.js";

export const Bus = createIcon("Bus", "bus", {
  nodes: [
    ["path", { d: "M8 6v6" }, { r: "slide", x: 1, a: 1, o: [12, 12] }],
    ["path", { d: "M15 6v6" }, { r: "slide", x: 1, a: 1, o: [12, 12] }],
    ["path", { d: "M2 12h19.6" }, { r: "slide", x: 1, a: 1, o: [12, 12] }],
    ["path", { d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" }, { r: "slide", x: 1, a: 1, o: [12, 12] }],
    ["circle", { cx: "7", cy: "18", r: "2" }, { r: "spin", d: 0.05, a: 360, o: [7, 18] }],
    ["path", { d: "M9 18h5" }, { r: "slide", x: 1, a: 1, o: [12, 12] }],
    ["circle", { cx: "16", cy: "18", r: "2" }, { r: "spin", d: 0.05, a: 360, o: [16, 18] }],
  ],
});
