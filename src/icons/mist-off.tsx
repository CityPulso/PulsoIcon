import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mist-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MistOff = createIcon("MistOff", "mist-off", {
  nodes: [
    ["path", { d: "M12 5h9" }, { r: "slide", d: 0, x: 1, y: 0, a: 1.5 }],
    ["path", { d: "M3 10h7" }, { r: "slide", d: 0.05, x: -1, y: 0, a: 1.5 }],
    ["path", { d: "M18 10h1" }, { r: "slide", d: 0.05, x: -1, y: 0, a: 1.5 }],
    ["path", { d: "M5 15h5" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 1.5 }],
    ["path", { d: "M14 15h1m4 0h2" }, { r: "slide", d: 0.1, x: 1, y: 0, a: 1.5 }],
    ["path", { d: "M3 20h9m4 0h3" }, { r: "slide", d: 0.15, x: -1, y: 0, a: 1.5 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
