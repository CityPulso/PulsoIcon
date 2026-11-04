import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "voice-square" (MIT, Copyright (c) 2021 Luca Burgio).
export const VoiceSquare = createIcon("VoiceSquare", "voice-square", {
  nodes: [
    ["path", { d: "M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z" }],
    ["path", { d: "M12 6L12 18" }, { r: "grow", d: 0.12, o: [12, 12] }],
    ["path", { d: "M9 9L9 15" }, { r: "grow", d: 0.06, o: [9, 12] }],
    ["path", { d: "M18 11L18 13" }, { r: "grow", d: 0.24, o: [18, 12] }],
    ["path", { d: "M6 11L6 13" }, { r: "grow", d: 0.0, o: [6, 12] }],
    ["path", { d: "M15 7L15 17" }, { r: "grow", d: 0.18, o: [15, 12] }],
  ],
});
