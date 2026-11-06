import { icon } from "../icon.js";

// Drawn after Simple Icons "zsh" (CC0-1.0). Zsh is a trademark of its owner.

export const BrandZsh = icon("BrandZsh", "brand-zsh", {
  nodes: [
    ["circle", { cx: "5", cy: "8", r: "2" }, { r: "pop", o: [5, 8] }],
    ["path", { d: "M12.5 5.5 3.5 18.5" }, { r: "draw", d: 0.05, o: [8, 12] }],
    ["circle", { cx: "11", cy: "16", r: "2" }, { r: "pop", d: 0.1, o: [11, 16] }],
    ["path", { d: "M15.5 18.5h6" }, { r: "flicker", d: 0.2, o: [18.5, 18.5] }],
  ],
});
