import { createIcon } from "../runtime/createIcon.js";

export const WavesArrowUp = createIcon("WavesArrowUp", "waves-arrow-up", {
  nodes: [
    ["path", { d: "M12 2v8" }, { r: "bounce", y: -1, a: 2, o: [12, 6] }],
    ["path", { d: "M2 15c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }, { r: "sway", d: 0.05, a: 3, o: [12, 15] }],
    ["path", { d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }, { r: "sway", d: 0.12, a: 3, o: [12, 21] }],
    ["path", { d: "m8 6 4-4 4 4" }, { r: "bounce", y: -1, a: 2, o: [12, 6] }],
  ],
});
