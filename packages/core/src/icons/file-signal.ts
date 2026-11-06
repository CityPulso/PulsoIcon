import { icon } from "../icon.js";

export const FileSignal = icon("FileSignal", "file-signal", {
  nodes: [
    ["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M8 15h.01" }, { r: "pop", d: 0.1, o: [8.005, 15] }],
    ["path", { d: "M11.5 13.5a2.5 2.5 0 0 1 0 3" }, { r: "draw", d: 0.2, o: [11.75, 15] }],
    ["path", { d: "M15 12a5 5 0 0 1 0 6" }, { r: "draw", d: 0.3, o: [15.5, 15] }],
  ],
});
