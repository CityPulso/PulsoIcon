import { createIcon } from "../runtime/createIcon.js";

export const SignalMedium = createIcon("SignalMedium", "signal-medium", {
  nodes: [
    ["path", { d: "M2 20h.01" }, { r: "pop", o: [2.005, 20] }],
    ["path", { d: "M7 20v-4" }, { r: "grow", d: 0.06, o: [7, 20] }],
    ["path", { d: "M12 20v-8" }, { r: "grow", d: 0.12, o: [12, 20] }],
  ],
});
