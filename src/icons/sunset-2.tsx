import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "sunset-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Sunset2 = createIcon("Sunset2", "sunset-2", {
  nodes: [
    ["path", { d: "M3 13h1" }, { r: "twinkle", d: 0.1, o: [3.5, 13] }],
    ["path", { d: "M20 13h1" }, { r: "twinkle", d: 0.1, o: [20.5, 13] }],
    ["path", { d: "M5.6 6.6l.7 .7" }, { r: "twinkle", d: 0.15, o: [6, 7] }],
    ["path", { d: "M18.4 6.6l-.7 .7" }, { r: "twinkle", d: 0.15, o: [18, 7] }],
    ["path", { d: "M8 13a4 4 0 1 1 8 0" }, { r: "slide", y: 1, a: 1.5 }],
    ["path", { d: "M3 17h18" }],
    ["path", { d: "M7 20h5" }, { r: "growX", d: 0.1, o: [7, 20] }],
    ["path", { d: "M16 20h1" }, { r: "growX", d: 0.15, o: [16, 20] }],
    ["path", { d: "M12 5v-1" }, { r: "twinkle", d: 0.2, o: [12, 4.5] }],
  ],
});
