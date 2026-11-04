import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "smartphone-speaker" (MIT, Copyright (c) 2023 Phosphor Icons).

export const SmartphoneSpeaker = createIcon("SmartphoneSpeaker", "smartphone-speaker", {
  nodes: [
    ["rect", { x: "5", y: "2", width: "14", height: "20", rx: "2" }, { r: "ring", a: 6, o: [12, 12] }],
    ["path", { d: "M10 6h4" }, { r: "pulse", d: 0.1, o: [12, 6] }],
  ],
});
