import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "klm" (CC0-1.0). KLM is a trademark of its owner.
export const BrandKlm = createIcon("BrandKlm", "brand-klm", {
  nodes: [
    ["path", { d: "M12 2.5v3M10.5 4h3" }, { r: "twinkle", d: 0.25, o: [12, 4] }],
    ["path", { d: "M7.5 10a1.5 1.5 0 0 1 3 0a1.5 1.5 0 0 1 3 0a1.5 1.5 0 0 1 3 0" }, { r: "float", a: 1 }],
    ["path", { d: "M3 14v7M7 14l-3.5 3.5L7 21" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M9 14v7h3.5" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M14.5 21v-7l3 4 3-4v7" }, { r: "draw", d: 0.2 }],
  ],
});
