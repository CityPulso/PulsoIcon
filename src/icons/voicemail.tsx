import { createIcon } from "../runtime/createIcon.js";

export const Voicemail = createIcon("Voicemail", "voicemail", {
  nodes: [
    ["circle", { cx: "6", cy: "12", r: "4" }, { r: "pop", o: [6, 12] }],
    ["circle", { cx: "18", cy: "12", r: "4" }, { r: "pop", d: 0.08, o: [18, 12] }],
    ["line", { x1: "6", x2: "18", y1: "16", y2: "16" }, { r: "growX", d: 0.16, o: [12, 16] }],
  ],
});
