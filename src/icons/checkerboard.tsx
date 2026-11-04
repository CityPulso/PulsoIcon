import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "checkerboard" (MIT, Copyright (c) 2023 Phosphor Icons).
export const Checkerboard = createIcon("Checkerboard", "checkerboard", {
  nodes: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M12 3v18M3 12h18" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "m12 7 5 5M16 3l5 5" }, { r: "draw", d: 0.1, o: [16.5, 7.5] }],
    ["path", { d: "m3 16 5 5M7 12l5 5" }, { r: "draw", d: 0.2, o: [7.5, 16.5] }],
  ],
});
