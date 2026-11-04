import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "mood-smile-beam" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const FaceSmileBeam = createIcon("FaceSmileBeam", "face-smile-beam", {
  nodes: [
    ["path", { d: "M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18" }],
    ["path", { d: "M10 10c-.5 -1 -2.5 -1 -3 0" }, { r: "bounce", x: 0, y: -1, a: 1, o: [8.5, 9.6] }],
    ["path", { d: "M17 10c-.5 -1 -2.5 -1 -3 0" }, { r: "bounce", x: 0, y: -1, a: 1, o: [15.5, 9.6] }],
    ["path", { d: "M14.5 15a3.5 3.5 0 0 1 -5 0" }, { r: "draw", d: 0.15, o: [12, 15.5] }],
  ],
});
