import { createIcon } from "../runtime/createIcon.js";

export const Videotape = createIcon("Videotape", "videotape", {
  nodes: [
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M2 8h20" }, { r: "fade", o: [12, 10] }],
    ["circle", { cx: "8", cy: "14", r: "2" }, { r: "spin", a: 360, o: [8, 14] }],
    ["path", { d: "M8 12h8" }, { r: "fade", o: [12, 10] }],
    ["circle", { cx: "16", cy: "14", r: "2" }, { r: "spin", a: 360, o: [16, 14] }],
  ],
});
