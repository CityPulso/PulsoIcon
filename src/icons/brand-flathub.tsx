import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "flathub" (CC0-1.0). Flathub is a trademark of its owner.
export const BrandFlathub = createIcon("BrandFlathub", "brand-flathub", {
  nodes: [
    ["circle", { cx: "7", cy: "7", r: "4" }, { r: "pop", o: [7, 7] }],
    ["polygon", { points: "14 3.5 21 7 14 10.5" }, { r: "press", d: 0.1, a: 0.08, o: [17, 7] }],
    ["rect", { x: "3", y: "13", width: "8", height: "8", rx: "2.5" }, { r: "pop", d: 0.2, o: [7, 17] }],
    ["path", { d: "M17 13v8M13 17h8" }, { r: "spin", d: 0.3, o: [17, 17] }],
  ],
});
