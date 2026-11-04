import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "rubymine" (CC0-1.0). RubyMine is a trademark of its owner.
export const BrandRubymine = createIcon("BrandRubymine", "brand-rubymine", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "1" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6.5 12.5v-6h2a1.75 1.75 0 0 1 0 3.5h-2M8.5 10l1.5 2.5" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M12 12.5v-6l2.5 3.5 2.5-3.5v6" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M6.5 17.5h5" }, { r: "flicker", d: 0.35 }],
  ],
});
