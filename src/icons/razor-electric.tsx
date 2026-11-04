import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "razor-electric" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const RazorElectric = createIcon("RazorElectric", "razor-electric", {
  nodes: [
    ["path", { d: "M8 3v2" }, { r: "flicker" }],
    ["path", { d: "M12 3v2" }, { r: "flicker", d: 0.05 }],
    ["path", { d: "M16 3v2" }, { r: "flicker", d: 0.1 }],
    ["path", { d: "M9 12v6a3 3 0 0 0 6 0v-6h-6" }, { r: "shake", o: [12, 12] }],
    ["path", { d: "M8 5h8l-1 4h-6l-1 -4" }, { r: "shake", o: [12, 12] }],
    ["path", { d: "M12 17v1" }, { r: "shake", o: [12, 12] }],
  ],
});
