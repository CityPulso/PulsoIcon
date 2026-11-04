import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "intellijidea" (CC0-1.0). IntelliJ IDEA is a trademark of its owner.
export const BrandIntellijIdea = createIcon("BrandIntellijIdea", "brand-intellij-idea", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6.5 7h3M8 7v6M6.5 13h3" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M16.5 7v4a2 2 0 0 1-4 0" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M7 17h5" }, { r: "blink", d: 0.2, o: [9.5, 17] }],
  ],
});
