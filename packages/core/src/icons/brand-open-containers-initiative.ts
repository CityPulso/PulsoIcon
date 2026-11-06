import { icon } from "../icon.js";

// Drawn after Simple Icons "opencontainersinitiative" (CC0-1.0). Open Containers Initiative is a trademark of its owner.
export const BrandOpenContainersInitiative = icon("BrandOpenContainersInitiative", "brand-open-containers-initiative", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "1" }],
    ["path", { d: "M11.5 8H8v8h3.5" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M15.5 11v5" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M15.5 8h.01" }, { r: "pop", d: 0.3, o: [15.5, 8] }],
  ],
});
