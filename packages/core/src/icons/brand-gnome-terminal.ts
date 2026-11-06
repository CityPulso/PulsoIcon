import { icon } from "../icon.js";

// Drawn after Simple Icons "gnometerminal" (CC0-1.0). GNOME Terminal is a trademark of its owner.
export const BrandGnomeTerminal = icon("BrandGnomeTerminal", "brand-gnome-terminal", {
  nodes: [
    ["rect", { x: "2.5", y: "3", width: "19", height: "18", rx: "2" }],
    ["path", { d: "M6.5 7.5l3 2.5-3 2.5" }, { r: "slide", x: 1, y: 0, a: 1, o: [8, 10] }],
    ["path", { d: "M11.5 12.5h4" }, { r: "flicker", d: 0.1, o: [13.5, 12.5] }],
  ],
});
