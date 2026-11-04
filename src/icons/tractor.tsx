import { createIcon } from "../runtime/createIcon.js";

export const Tractor = createIcon("Tractor", "tractor", {
  nodes: [
    ["path", { d: "m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20" }, { r: "slide", x: 1, a: 1, o: [12.404, 11] }],
    ["path", { d: "M16 18h-5" }, { r: "slide", x: 1, a: 1, o: [12.404, 11] }],
    ["path", { d: "M18 5a1 1 0 0 0-1 1v5.573" }, { r: "slide", x: 1, a: 1, o: [12.404, 11] }],
    ["path", { d: "M3 4h8.129a1 1 0 0 1 .99.863L13 11.246" }, { r: "slide", x: 1, a: 1, o: [12.404, 11] }],
    ["path", { d: "M4 11V4" }, { r: "slide", x: 1, a: 1, o: [12.404, 11] }],
    ["path", { d: "M7 15h.01" }, { r: "slide", x: 1, a: 1, o: [12.404, 11] }],
    ["path", { d: "M8 10.1V4" }, { r: "slide", x: 1, a: 1, o: [12.404, 11] }],
    ["circle", { cx: "18", cy: "18", r: "2" }, { r: "spin", a: 360, o: [18, 18] }],
    ["circle", { cx: "7", cy: "15", r: "5" }, { r: "spin", a: 360, o: [7, 15] }],
  ],
});
