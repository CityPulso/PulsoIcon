import { icon } from "../icon.js";

// Adapted from Tabler Icons "vignette" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Vignette = icon("Vignette", "vignette", {
  nodes: [
    ["path", { d: "M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0" }, { r: "pulse", a: 0.05, o: [12, 12] }],
    ["path", { d: "M7.02 12h-.01" }, { r: "fade", d: 0.04 }],
    ["path", { d: "M12.02 7h-.01" }, { r: "fade", d: 0.08 }],
    ["path", { d: "M17.02 12h-.01" }, { r: "fade", d: 0.12 }],
    ["path", { d: "M12.02 17h-.01" }, { r: "fade", d: 0.16 }],
    ["path", { d: "M8.483 8.468l-.007 -.007" }, { r: "fade", d: 0.2 }],
    ["path", { d: "M15.554 8.468l-.007 -.007" }, { r: "fade", d: 0.24 }],
    ["path", { d: "M15.554 15.539l-.007 -.007" }, { r: "fade", d: 0.28 }],
    ["path", { d: "M8.483 15.539l-.007 -.007" }, { r: "fade", d: 0.32 }],
  ],
});
