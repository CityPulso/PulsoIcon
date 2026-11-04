import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "flip-reverse" (MIT, Copyright (c) 2021 Luca Burgio).
export const FlipReverse = createIcon("FlipReverse", "flip-reverse", {
  nodes: [
    ["path", { d: "M9.5 12V14" }, { r: "fade", d: 0.1 }],
    ["path", { d: "M5.75 12L4.8125 14" }, { r: "fade", d: 0.1 }],
    ["path", { d: "M7.625 20H9.5V18" }, { r: "fade", d: 0.1 }],
    ["path", { d: "M3.875 20H2L2.9375 18" }, { r: "fade", d: 0.1 }],
    ["path", { d: "M7.625 8L9.5 4V8" }, { r: "fade", d: 0.1 }],
    ["path", { d: "M14.5 20H22L14.5 4V20Z" }, { r: "flip", o: [18.25, 12] }],
  ],
});
