import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "face-blank" (MIT, Copyright (c) 2023 Phosphor Icons).

export const FaceBlank = createIcon("FaceBlank", "face-blank", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "wobble", a: 5, o: [12, 12] }],
    ["path", { d: "M9 10h.01" }, { r: "blink", d: 0.1, o: [9, 10] }],
    ["path", { d: "M15 10h.01" }, { r: "blink", d: 0.1, o: [15, 10] }],
  ],
});
