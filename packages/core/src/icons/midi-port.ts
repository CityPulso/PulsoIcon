import { icon } from "../icon.js";

export const MidiPort = icon("MidiPort", "midi-port", {
  nodes: [
    ["path", { d: "M12 18h.01" }, { r: "pop", d: 0.2, o: [12.005, 18] }],
    ["path", { d: "M15 2.458V5a1 1 0 01-1 1h-4a1 1 0 01-1-1V2.458" }, { r: "slide", d: 0.05, y: 1, a: 1, o: [12, 4.229] }],
    ["path", { d: "M16 16h.01" }, { r: "pop", d: 0.25, o: [16.005, 16] }],
    ["path", { d: "M18 12h.01" }, { r: "pop", d: 0.3, o: [18.005, 12] }],
    ["path", { d: "M6 12h.01" }, { r: "pop", d: 0.1, o: [6.005, 12] }],
    ["path", { d: "M8 16h.01" }, { r: "pop", d: 0.15, o: [8.005, 16] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 60, o: [12, 12] }],
  ],
});
