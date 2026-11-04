import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "jetbrains" (CC0-1.0). JetBrains is a trademark of its owner.
export const BrandJetbrains = createIcon("BrandJetbrains", "brand-jetbrains", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 17h6" }, { r: "blink", o: [10, 17] }],
  ],
});
