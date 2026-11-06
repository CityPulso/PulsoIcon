import { icon } from "../icon.js";

export const Signal = icon("Signal", "signal", {
  nodes: [
    ["path", { d: "M2 20h.01" }, { r: "pop", o: [2.005, 20] }],
    ["path", { d: "M7 20v-4" }, { r: "grow", d: 0.05, o: [7, 20] }],
    ["path", { d: "M12 20v-8" }, { r: "grow", d: 0.1, o: [12, 20] }],
    ["path", { d: "M17 20V8" }, { r: "grow", d: 0.15, o: [17, 20] }],
    ["path", { d: "M22 4v16" }, { r: "grow", d: 0.2, o: [22, 20] }],
  ],
});
