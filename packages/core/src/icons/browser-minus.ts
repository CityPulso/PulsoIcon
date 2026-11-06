import { icon } from "../icon.js";

// Adapted from Tabler Icons "browser-minus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrowserMinus = icon("BrowserMinus", "browser-minus", {
  nodes: [
    ["path", { d: "M4 8h16" }],
    ["path", { d: "M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v9" }],
    ["path", { d: "M8 4v4" }],
    ["path", { d: "M16 19h6" }, { r: "draw", d: 0.1 }],
  ],
});
