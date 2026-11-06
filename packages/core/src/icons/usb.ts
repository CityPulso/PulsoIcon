import { icon } from "../icon.js";

export const Usb = icon("Usb", "usb", {
  nodes: [
    ["circle", { cx: "10", cy: "7", r: "1" }, { r: "pop", d: 0.05, o: [10, 7] }],
    ["circle", { cx: "4", cy: "20", r: "1" }, { r: "pop", d: 0.11, o: [4, 20] }],
    ["path", { d: "M4.7 19.3 19 5" }, { r: "redraw", o: [11.85, 12.15] }],
    ["path", { d: "m21 3-3 1 2 2Z" }, { r: "fade", d: 0.15, o: [13, 10] }],
    ["path", { d: "M9.26 7.68 5 12l2 5" }, { r: "fade", d: 0.19, o: [13, 10] }],
    ["path", { d: "m10 14 5 2 3.5-3.5" }, { r: "fade", d: 0.23, o: [13, 10] }],
    ["path", { d: "m18 12 1-1 1 1-1 1Z" }, { r: "fade", d: 0.27, o: [13, 10] }],
  ],
});
