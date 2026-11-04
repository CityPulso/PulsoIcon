import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "microphone-stage" (MIT, Copyright (c) 2023 Phosphor Icons).

export const MicrophoneStage = createIcon("MicrophoneStage", "microphone-stage", {
  nodes: [
    ["circle", { cx: "16", cy: "7", r: "5" }, { r: "tilt", a: 10, o: [5, 19] }],
    ["path", { d: "M12.5 3.5l7 7" }, { r: "tilt", a: 10, o: [5, 19] }],
    ["path", { d: "M11.1 7.9 4.6 18.6a.6.6 0 0 0 .8.8L15.5 12" }, { r: "tilt", a: 10, o: [5, 19] }],
  ],
});
