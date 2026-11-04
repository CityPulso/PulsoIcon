import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "starship" (CC0-1.0). Starship is a trademark of its owner.
export const BrandStarship = createIcon("BrandStarship", "brand-starship", {
  nodes: [
    ["path", { d: "M20 7A10 10 0 1 0 17 20.6" }, { r: "draw" }],
    ["path", { d: "M18 6c-3.5 0-6.5 2-8.5 5.5l3 3C16 12.5 18 9.5 18 6z" }, { r: "float", d: 0.1, x: 1, y: -1, o: [14, 10] }],
    ["path", { d: "M10.2 10.5H8L6.5 12.5l3 .5" }, { r: "float", d: 0.1, x: 1, y: -1, o: [14, 10] }],
    ["path", { d: "M13.5 13.8V16l-2 1.5-.5-3" }, { r: "float", d: 0.1, x: 1, y: -1, o: [14, 10] }],
    ["path", { d: "M8 5v3M6.5 6.5h3" }, { r: "twinkle", d: 0.3, o: [8, 6.5] }],
  ],
});
