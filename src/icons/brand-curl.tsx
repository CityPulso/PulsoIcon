import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "curl" (CC0-1.0). curl is a trademark of its owner.
export const BrandCurl = createIcon("BrandCurl", "brand-curl", {
  nodes: [
    ["circle", { cx: "3.5", cy: "9.5", r: "1.25" }, { r: "pop" }],
    ["circle", { cx: "3.5", cy: "14.5", r: "1.25" }, { r: "pop", d: 0.05 }],
    ["circle", { cx: "8", cy: "19.5", r: "1.25" }, { r: "pop", d: 0.1 }],
    ["path", { d: "M8.59 18.01L13.41 5.99" }, { r: "draw", d: 0.15 }],
    ["circle", { cx: "14", cy: "4.5", r: "1.25" }, { r: "pop", d: 0.25 }],
    ["circle", { cx: "14", cy: "19.5", r: "1.25" }, { r: "pop", d: 0.2 }],
    ["path", { d: "M14.59 18.01L19.41 5.99" }, { r: "draw", d: 0.25 }],
    ["circle", { cx: "20", cy: "4.5", r: "1.25" }, { r: "pop", d: 0.35 }],
  ],
});
