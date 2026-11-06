import { icon } from "../icon.js";

// Adapted from Iconoir "voice-scan" (MIT, Copyright (c) 2021 Luca Burgio).
export const VoiceScan = icon("VoiceScan", "voice-scan", {
  nodes: [
    ["path", { d: "M12 6L12 18" }],
    ["path", { d: "M9 9L9 15" }, { r: "grow", d: 0.12, o: [12, 12] }],
    ["path", { d: "M18 11L18 13" }, { r: "grow", d: 0.06, o: [9, 12] }],
    ["path", { d: "M6 11L6 13" }, { r: "grow", d: 0.24, o: [18, 12] }],
    ["path", { d: "M15 7L15 17" }, { r: "grow", d: 0.0, o: [6, 12] }],
    ["path", { d: "M6 3H3V6" }, { r: "pulse", a: 0.06, o: [12, 12] }],
    ["path", { d: "M18 3H21V6" }],
    ["path", { d: "M6 21H3V18" }],
    ["path", { d: "M18 21H21V18" }],
  ],
});
