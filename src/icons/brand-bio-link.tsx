import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "biolink" (CC0-1.0). Bio Link is a trademark of its owner.
export const BrandBioLink = createIcon("BrandBioLink", "brand-bio-link", {
  nodes: [
    ["path", { d: "M3.5 3v7h2.25a1.75 1.75 0 0 0 0-3.5H3.5h2a1.75 1.75 0 0 0 0-3.5z" }, { r: "draw" }],
    ["path", { d: "M9.5 3v7" }, { r: "draw", d: 0.08 }],
    ["rect", { x: "12", y: "3", width: "4", height: "7", rx: "2" }, { r: "draw", d: 0.16 }],
    ["path", { d: "M19 10h.01" }, { r: "pop", d: 0.3, o: [19, 10] }],
    ["path", { d: "M3.5 14v7h3" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M9 14v7" }, { r: "draw", d: 0.18 }],
    ["path", { d: "M11.5 21v-7l4 7v-7" }, { r: "draw", d: 0.24 }],
    ["path", { d: "M18 14v7M21 14l-3 3.5 3 3.5" }, { r: "draw", d: 0.3 }],
  ],
});
