import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "scale-outline" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ScaleOutline = createIcon("ScaleOutline", "scale-outline", {
  nodes: [
    ["path", { d: "M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-10" }],
    [
      "path",
      { d: "M12 7c1.956 0 3.724 .802 5 2.095l-2.956 2.904a3 3 0 0 0 -2.038 -.799a3 3 0 0 0 -2.038 .798l-2.956 -2.903a6.979 6.979 0 0 1 5 -2.095" },
      { r: "tilt", a: 12, o: [12, 11] },
    ],
  ],
});
