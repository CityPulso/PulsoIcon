import { createIcon } from "../runtime/createIcon.js";

export const CassetteTape = createIcon("CassetteTape", "cassette-tape", {
  nodes: [
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "8", cy: "10", r: "2" }, { r: "spin", a: 360, o: [8, 10] }],
    ["path", { d: "M8 12h8" }, { r: "fade", d: 0.1, o: [12, 16] }],
    ["circle", { cx: "16", cy: "10", r: "2" }, { r: "spin", a: 360, o: [16, 10] }],
    ["path", { d: "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3" }, { r: "fade", d: 0.1, o: [12, 16] }],
  ],
});
