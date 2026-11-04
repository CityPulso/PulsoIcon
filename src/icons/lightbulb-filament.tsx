import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "lightbulb-filament" (MIT, Copyright (c) 2023 Phosphor Icons).
export const LightbulbFilament = createIcon("LightbulbFilament", "lightbulb-filament", {
  nodes: [
    ["path", { d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" }, { r: "flicker", o: [12, 8] }],
    ["path", { d: "m10 9 2 2 2-2" }, { r: "flicker", d: 0.1, o: [12, 10] }],
    ["path", { d: "M12 11v7" }, { r: "draw", d: 0.05, o: [12, 14.5] }],
    ["path", { d: "M9 18h6" }, { r: "growX", d: 0.15, o: [12, 18] }],
    ["path", { d: "M10 22h4" }, { r: "growX", d: 0.22, o: [12, 22] }],
  ],
});
