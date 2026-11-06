import { icon } from "../icon.js";

// Drawn after Phosphor Icons "frame-corners" (MIT, Copyright (c) 2023 Phosphor Icons).
export const FrameCorners = icon("FrameCorners", "frame-corners", {
  nodes: [
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }],
    ["path", { d: "M14 8h3v3" }, { r: "slide", x: 1, y: -1, a: 1 }],
    ["path", { d: "M7 13v3h3" }, { r: "slide", x: -1, y: 1, a: 1 }],
  ],
});
