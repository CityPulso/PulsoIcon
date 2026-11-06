import { icon } from "../icon.js";

// Adapted from Iconoir "voice-circle" (MIT, Copyright (c) 2021 Luca Burgio).
export const VoiceCircle = icon("VoiceCircle", "voice-circle", {
  nodes: [
    ["path", { d: "M12 6L12 18" }],
    ["path", { d: "M9 9L9 15" }, { r: "grow", d: 0.12, o: [12, 12] }],
    ["path", { d: "M18 11L18 13" }, { r: "grow", d: 0.06, o: [9, 12] }],
    ["path", { d: "M6 11L6 13" }, { r: "grow", d: 0.24, o: [18, 12] }],
    ["path", { d: "M15 7L15 17" }, { r: "grow", d: 0.0, o: [6, 12] }],
    ["path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" }, { r: "grow", d: 0.18, o: [15, 12] }],
  ],
});
