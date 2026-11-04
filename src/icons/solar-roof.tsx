import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "solar-roof" (MIT, Copyright (c) 2023 Phosphor Icons).

export const SolarRoof = createIcon("SolarRoof", "solar-roof", {
  nodes: [
    ["path", { d: "M11 20v-9L6.5 4 2 11v9h19.5v-9" }],
    ["path", { d: "M6.5 4H17l4.5 7H11" }],
    ["path", { d: "M8.75 7.5h10.5" }, { r: "flicker", d: 0.05, o: [14, 7.5] }],
    ["path", { d: "m11.75 4 4.5 7" }, { r: "flicker", d: 0.15, o: [14, 7.5] }],
  ],
});
