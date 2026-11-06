import { icon } from "../icon.js";

// Adapted from Iconoir "drag" (MIT, Copyright (c) 2021 Luca Burgio).
export const Drag = icon("Drag", "drag", {
  nodes: [
    ["path", { d: "M12 12L4 4M4 4V8M4 4H8" }, { r: "slide", x: -1, y: -1, a: 1.2, o: [8, 8] }],
    ["path", { d: "M12 12L20 4M20 4V8M20 4H16" }, { r: "slide", x: 1, y: -1, a: 1.2, o: [16, 8] }],
    ["path", { d: "M12 12L4 20M4 20V16M4 20H8" }, { r: "slide", x: -1, y: 1, a: 1.2, o: [8, 16] }],
    ["path", { d: "M12 12L20 20M20 20V16M20 20H16" }, { r: "slide", x: 1, y: 1, a: 1.2, o: [16, 16] }],
  ],
});
