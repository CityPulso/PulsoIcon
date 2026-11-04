import { createIcon } from "../runtime/createIcon.js";

export const SignalLow = createIcon("SignalLow", "signal-low", {
  nodes: [
    ["path", { d: "M2 20h.01" }, { r: "pop", o: [2.005, 20] }],
    ["path", { d: "M7 20v-4" }, { r: "grow", d: 0.08, o: [7, 20] }],
  ],
});
