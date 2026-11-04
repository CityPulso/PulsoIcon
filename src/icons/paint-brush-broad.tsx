import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "paint-brush-broad" (MIT, Copyright (c) 2023 Phosphor Icons).
export const PaintBrushBroad = createIcon("PaintBrushBroad", "paint-brush-broad", {
  nodes: [
    ["rect", { width: "16", height: "7", x: "4", y: "3", rx: "1" }, { r: "tilt", a: 10, o: [12, 21] }],
    ["path", { d: "M15 3v3" }, { r: "tilt", a: 10, o: [12, 21] }],
    ["path", { d: "M9 10v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2" }, { r: "tilt", a: 10, o: [12, 21] }],
    ["path", { d: "M11 13v6.5a1 1 0 0 0 2 0V13" }, { r: "tilt", a: 10, o: [12, 21] }],
  ],
});
