import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "voice-check" (MIT, Copyright (c) 2021 Luca Burgio).
export const VoiceCheck = createIcon("VoiceCheck", "voice-check", {
  nodes: [
    ["path", { d: "M12 3L12 19" }, { r: "grow", d: 0.12, o: [12, 11] }],
    ["path", { d: "M8 8L8 14" }, { r: "grow", d: 0.06, o: [8, 11] }],
    ["path", { d: "M20 9L20 13" }, { r: "grow", d: 0.24, o: [20, 11] }],
    ["path", { d: "M4 9L4 13" }, { r: "grow", d: 0.0, o: [4, 11] }],
    ["path", { d: "M16 6L16 15" }, { r: "grow", d: 0.18, o: [16, 11] }],
    ["path", { d: "M15.5 19.5L17.5 21.5L22.5 16.5" }, { r: "draw", d: 0.3 }],
  ],
});
