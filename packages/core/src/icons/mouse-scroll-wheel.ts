import { icon } from "../icon.js";

// Adapted from Iconoir "mouse-scroll-wheel" (MIT, Copyright (c) 2021 Luca Burgio).
export const MouseScrollWheel = icon("MouseScrollWheel", "mouse-scroll-wheel", {
  nodes: [
    ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "8" }],
    ["path", { d: "M12 5v8" }],
    ["path", { d: "M10 7l2-2 2 2" }, { r: "slide", x: 0, y: -1, a: 1 }],
    ["path", { d: "M10 11l2 2 2-2" }, { r: "slide", x: 0, y: 1, a: 1 }],
  ],
});
