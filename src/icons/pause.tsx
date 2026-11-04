import { createIcon } from "../runtime/createIcon.js";

export const Pause = createIcon("Pause", "pause", {
  nodes: [
    ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1" }, { r: "grow", d: 0.08, o: [16.5, 21] }],
    ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1" }, { r: "grow", o: [7.5, 21] }],
  ],
});
