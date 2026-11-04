import { createIcon } from "../runtime/createIcon.js";

export const ClefBass = createIcon("ClefBass", "clef-bass", {
  nodes: [
    ["path", { d: "M19 11h.01" }, { r: "pop", d: 0.3, o: [19.005, 11] }],
    ["path", { d: "M19 6h.01" }, { r: "pop", d: 0.38, o: [19.005, 6] }],
    ["path", { d: "M5 8c0-4 4-4 4-4 6 0 6 6 6 6 0 7-10 11-10 11" }, { r: "redraw", o: [10, 12.5] }],
    ["circle", { cx: "7", cy: "8", r: "2" }, { r: "redraw", o: [10, 12.5] }],
  ],
});
