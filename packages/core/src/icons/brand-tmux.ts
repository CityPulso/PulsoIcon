import { icon } from "../icon.js";

// Drawn after Simple Icons "tmux" (CC0-1.0). tmux is a trademark of its owner.

export const BrandTmux = icon("BrandTmux", "brand-tmux", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
    ["path", { d: "M12 3v14" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M12 10h9" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M3 17h18" }, { r: "growX", d: 0.2, o: [3, 17] }],
  ],
});
