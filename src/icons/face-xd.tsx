import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mood-xd" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceXd = createIcon("FaceXd", "face-xd", {
  nodes: [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }],
    ["path", { d: "M9 14h6a3 3 0 0 1 -6 0" }, { r: "bounce", d: 0.2, x: 0, y: 1, a: 1, o: [12, 15.5] }],
    ["path", { d: "M9 8l6 3" }, { r: "draw", o: [12, 9.5] }],
    ["path", { d: "M9 11l6 -3" }, { r: "draw", d: 0.12, o: [12, 9.5] }],
  ],
});
