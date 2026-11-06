import { icon } from "../icon.js";

// Adapted from Iconoir "flip" (MIT, Copyright (c) 2021 Luca Burgio).
export const Flip = icon("Flip", "flip", {
  nodes: [
    ["path", { d: "M9.5 20H2L9.5 4V20Z" }, { r: "flip", o: [5.75, 12] }],
    ["path", { d: "M20.125 20H22L21.0625 18" }, { r: "fade", d: 0.1 }],
    ["path", { d: "M16.375 20H14.5V18" }, { r: "fade", d: 0.1 }],
    ["path", { d: "M14.5 12V14" }, { r: "fade", d: 0.1 }],
    ["path", { d: "M18.25 12L19.1875 14" }, { r: "fade", d: 0.1 }],
    ["path", { d: "M16.375 8L14.5 4V8" }, { r: "fade", d: 0.1 }],
  ],
});
