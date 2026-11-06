import { icon } from "../icon.js";

// Drawn after Simple Icons "iterm2" (CC0-1.0). iTerm2 is a trademark of its owner.
export const BrandIterm2 = icon("BrandIterm2", "brand-iterm2", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "3" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M10 7.5H8.2a1.35 1.35 0 0 0 0 2.7h1.1a1.35 1.35 0 0 1 0 2.7H7.5M8.75 6.5v7.5" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M13 6.5v7.5" }, { r: "blink", d: 0.2, o: [13, 10] }],
  ],
});
