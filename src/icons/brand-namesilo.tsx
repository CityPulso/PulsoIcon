import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "namesilo" (CC0-1.0). NameSilo is a trademark of its owner.
export const BrandNamesilo = createIcon("BrandNamesilo", "brand-namesilo", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }],
    ["path", { d: "M8.5 9.5L12 7l3.5 2.5V18h-7z" }, { r: "rise", a: 2, o: [12, 18] }],
    ["path", { d: "M8.5 13.5h7" }, { r: "rise", a: 2, o: [12, 18] }],
  ],
});
