import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "tools-kitchen-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ToolsKitchenOff = createIcon("ToolsKitchenOff", "tools-kitchen-off", {
  nodes: [
    ["path", { d: "M7 3h5l-.5 4.5m-.4 3.595l-.1 .905h-6l-.875 -7.874" }, { r: "tilt", a: 6, o: [8, 20] }],
    ["path", { d: "M7 18h2v3h-2v-3" }, { r: "tilt", a: 6, o: [8, 20] }],
    ["path", { d: "M15.225 11.216c.42 -2.518 1.589 -5.177 4.775 -8.216v12h-1" }, { r: "tilt", d: 0.1, a: -6, o: [19, 20] }],
    ["path", { d: "M20 15v1m0 4v1h-1v-2" }, { r: "tilt", d: 0.1, a: -6, o: [19, 20] }],
    ["path", { d: "M8 12v6" }, { r: "tilt", a: 6, o: [8, 20] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M4 3h8l-1 9h-6l-1 -9" }, { r: "tilt", a: 6, o: [8, 20] }],
    ["path", { d: "M7 18h2v3h-2l0 -3", fill: "none" }, { r: "tilt", a: 6, o: [8, 20] }],
    ["path", { d: "M20 3v12h-5c-.023 -3.681 .184 -7.406 5 -12" }, { r: "tilt", d: 0.1, a: -6, o: [19, 20] }],
    ["path", { d: "M20 15v6h-1v-3", fill: "none" }, { r: "tilt", d: 0.1, a: -6, o: [19, 20] }],
    ["path", { d: "M8 12l0 6", fill: "none" }, { r: "tilt", a: 6, o: [8, 20] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
