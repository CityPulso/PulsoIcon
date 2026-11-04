import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "jetblue" (CC0-1.0). JetBlue is a trademark of its owner.
export const BrandJetblue = createIcon("BrandJetblue", "brand-jetblue", {
  nodes: [
    ["path", { d: "M7 9v9a2.5 2.5 0 0 1-3 2.5" }, { r: "draw" }],
    ["path", { d: "M7 5.5h.01" }, { r: "pop", o: [7, 5.5], d: 0.1 }],
    ["path", { d: "M11 5v13h5a3.25 3.25 0 0 0 0-6.5h-5 M11 5h4a3.25 3.25 0 0 1 0 6.5" }, { r: "draw", d: 0.15 }],
  ],
});
