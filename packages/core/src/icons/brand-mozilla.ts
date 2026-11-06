import { icon } from "../icon.js";

// Drawn after Simple Icons "mozilla" (CC0-1.0). Mozilla is a trademark of its owner.
export const BrandMozilla = icon("BrandMozilla", "brand-mozilla", {
  nodes: [
    ["path", { d: "M4 3v18" }, { r: "draw" }],
    ["path", { d: "M8 3h12v7h-3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M8 21h12v-7h-3" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M8 7v10M8 7l4.5 5L8 17" }, { r: "pop", d: 0.2, o: [10, 12] }],
  ],
});
