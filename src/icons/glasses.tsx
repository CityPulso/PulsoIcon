import { createIcon } from "../runtime/createIcon.js";

export const Glasses = createIcon("Glasses", "glasses", {
  svg: { r: "bounce", y: -1, a: 1.5 },
  nodes: [
    ["circle", { cx: "6", cy: "15", r: "4" }, { r: "blink", d: 0.15, o: [6, 15] }],
    ["circle", { cx: "18", cy: "15", r: "4" }, { r: "blink", d: 0.15, o: [18, 15] }],
    ["path", { d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" }],
    ["path", { d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2" }],
    ["path", { d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2" }],
  ],
});
