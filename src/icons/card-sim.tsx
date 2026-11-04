import { createIcon } from "../runtime/createIcon.js";

export const CardSim = createIcon("CardSim", "card-sim", {
  nodes: [
    ["path", { d: "M12 14v4" }, { r: "press", d: 0.1, a: 0.08, o: [12, 14] }],
    ["path", { d: "M14.172 2a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 20 7.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" }, { r: "slide", y: -1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M8 14h8" }, { r: "press", d: 0.1, a: 0.08, o: [12, 14] }],
    ["rect", { x: "8", y: "10", width: "8", height: "8", rx: "2" }, { r: "press", d: 0.1, a: 0.08, o: [12, 14] }],
  ],
});
