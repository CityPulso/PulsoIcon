import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "device-speaker-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const SpeakerOff = createIcon("SpeakerOff", "speaker-off", {
  nodes: [
    ["path", { d: "M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" }],
    ["path", { d: "M11.114 11.133a3 3 0 1 0 3.754 3.751" }, { r: "pulse", a: 0.15, o: [13, 14] }],
    ["path", { d: "M12 7v.01" }, { r: "pulse", d: 0.08, a: 0.3, o: [12, 7] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
});
