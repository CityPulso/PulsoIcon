import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "voice-xmark" (MIT, Copyright (c) 2021 Luca Burgio).
export const VoiceXmark = createIcon("VoiceXmark", "voice-xmark", {
  nodes: [
    ["path", { d: "M12 3L12 19" }, { r: "grow", d: 0.12, o: [12, 11] }],
    ["path", { d: "M8 8L8 14" }, { r: "grow", d: 0.06, o: [8, 11] }],
    ["path", { d: "M20 9L20 13" }, { r: "grow", d: 0.24, o: [20, 11] }],
    ["path", { d: "M4 9L4 13" }, { r: "grow", d: 0.0, o: [4, 11] }],
    ["path", { d: "M16 6L16 14" }, { r: "grow", d: 0.18, o: [16, 11] }],
    [
      "path",
      { d: "M16.1213 21.364L18.2427 19.2427M18.2427 19.2427L20.364 17.1213M18.2427 19.2427L16.1213 17.1213M18.2427 19.2427L20.364 21.364" },
      { r: "pop", d: 0.3, o: [18.25, 19.25] },
    ],
  ],
});
