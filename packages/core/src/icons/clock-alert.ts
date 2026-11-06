import { icon } from "../icon.js";

export const ClockAlert = icon("ClockAlert", "clock-alert", {
  nodes: [
    ["path", { d: "M12 6v6l4 2" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M20 12v5" }, { r: "grow", d: 0.15, o: [20, 12] }],
    ["path", { d: "M20 21h.01" }, { r: "pop", d: 0.3, o: [20.005, 21] }],
    ["path", { d: "M21.25 8.2A10 10 0 1 0 16 21.16" }, { r: "shake", a: 1, o: [11.624, 11.996] }],
  ],
});
