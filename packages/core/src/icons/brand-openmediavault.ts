import { icon } from "../icon.js";

// Drawn after Simple Icons "openmediavault" (CC0-1.0). openmediavault is a trademark of its owner.
export const BrandOpenmediavault = icon("BrandOpenmediavault", "brand-openmediavault", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
    ["path", { d: "M3 9h18M3 15h18" }],
    ["path", { d: "M7 6h.01" }, { r: "blink", o: [7, 6] }],
    ["path", { d: "M7 12h.01" }, { r: "blink", d: 0.1, o: [7, 12] }],
    ["path", { d: "M7 18h.01" }, { r: "blink", d: 0.2, o: [7, 18] }],
  ],
});
