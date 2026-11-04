import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "microphone-speaking" (MIT, Copyright (c) 2021 Luca Burgio).
export const MicrophoneSpeaking = createIcon("MicrophoneSpeaking", "microphone-speaking", {
  nodes: [
    ["rect", { x: "9", y: "2", width: "6", height: "12", rx: "3" }, { r: "pulse", o: [12, 8] }],
    ["path", { d: "M5 3V5M1 2V6M19 3V5M23 2V6" }, { r: "flicker", d: 0.1 }],
    ["path", { d: "M5 10V11C5 14.866 8.13401 18 12 18V18V18C15.866 18 19 14.866 19 11V10" }],
    ["path", { d: "M12 18V22M12 22H9M12 22H15" }],
  ],
});
