import { icon } from "../icon.js";

// Drawn after Simple Icons "aidungeon" (CC0-1.0). AI Dungeon is a trademark of its owner.
export const BrandAiDungeon = icon("BrandAiDungeon", "brand-ai-dungeon", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M7 16l2.5-8 2.5 8" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M7.9 13.5h3.2" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M14.5 8h3M16 8v8M14.5 16h3" }, { r: "flicker", d: 0.3 }],
  ],
});
