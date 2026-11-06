import { icon } from "../icon.js";

export const FileClock = icon("FileClock", "file-clock", {
  nodes: [
    ["path", { d: "M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M8 14v2.2l1.6 1" }, { r: "spin", d: 0.1, a: 360, o: [8, 16] }],
    ["circle", { cx: "8", cy: "16", r: "6" }, { r: "pulse", d: 0.1, a: 0.06, o: [8, 16] }],
  ],
});
