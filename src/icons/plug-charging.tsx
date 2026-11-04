import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "plug-charging" (MIT, Copyright (c) 2023 Phosphor Icons).

export const PlugCharging = createIcon("PlugCharging", "plug-charging", {
  nodes: [
    ["path", { d: "M12 22v-5" }, { r: "fade", d: 0.1, o: [12, 19.5] }],
    ["path", { d: "M9 8V2M15 8V2" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "m13 9.5-2.5 3h3L11 15.5" }, { r: "flicker", d: 0.1, o: [12, 12.5] }],
  ],
});
