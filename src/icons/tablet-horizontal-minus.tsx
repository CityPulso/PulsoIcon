import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-ipad-horizontal-minus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const TabletHorizontalMinus = createIcon("TabletHorizontalMinus", "tablet-horizontal-minus", {
  nodes: [
    ["path", { d: "M12 20h-7a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9" }],
    ["path", { d: "M9 17h3.5" }],
    ["path", { d: "M16 19h6" }, { r: "growX", d: 0.1, o: [19, 19] }],
  ],
});
