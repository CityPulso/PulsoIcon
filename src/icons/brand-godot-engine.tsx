import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "godotengine" (CC-BY-4.0). Godot Engine is a trademark of its owner.
export const BrandGodotEngine = createIcon("BrandGodotEngine", "brand-godot-engine", {
  nodes: [
    ["path", { d: "M4 8.5 5 5l3 .5L9.5 3h5L16 5.5l3-.5 1 3.5v4.5h-2v5.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 18.5V13H4z" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["circle", { cx: "9", cy: "11", r: "1.8" }, { r: "blink", d: 0.15, o: [12, 11] }],
    ["circle", { cx: "15", cy: "11", r: "1.8" }, { r: "blink", d: 0.15, o: [12, 11] }],
    ["path", { d: "M9 16h6" }, { r: "growX", d: 0.25, o: [12, 16] }],
  ],
});
