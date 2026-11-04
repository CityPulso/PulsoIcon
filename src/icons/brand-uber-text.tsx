import { createIcon } from "../runtime/createIcon.js";

export const BrandUberText = createIcon("BrandUberText", "brand-uber-text", {
  nodes: [
    ["path", { d: "M1.5 8.5v5a2 2 0 0 0 4 0v-5" }, { r: "draw" }],
    ["path", { d: "M7.5 8.5v7" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M7.5 13.5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M13.5 13.5h4a2 2 0 1 0 -0.59 1.41" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M19.5 15.5v-4" }, { r: "draw", d: 0.4 }],
    ["path", { d: "M19.5 13.5a2 2 0 0 1 2 -2" }, { r: "draw", d: 0.48 }],
  ],
});
