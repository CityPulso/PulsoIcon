import { createIcon } from "../runtime/createIcon.js";

export const GaugeLow = createIcon("GaugeLow", "gauge-low", {
  nodes: [
    ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0" }, { r: "press", a: 0.04, o: [12, 11.5] }],
    ["path", { d: "m12 14-5 2" }, { r: "turn", d: 0.05, a: -25, o: [12, 14] }],
    ["path", { d: "M12 14h.01" }, { r: "pop", d: 0.1, o: [12, 14] }],
  ],
});
