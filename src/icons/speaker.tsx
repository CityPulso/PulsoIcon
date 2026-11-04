import { createIcon } from "../runtime/createIcon.js";

export const Speaker = createIcon("Speaker", "speaker", {
  nodes: [
    ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 6h.01" }, { r: "pop", d: 0.15, o: [12.005, 6] }],
    ["circle", { cx: "12", cy: "14", r: "4" }, { r: "beat", d: 0.05, o: [12, 14] }],
    ["path", { d: "M12 14h.01" }, { r: "pop", d: 0.21, o: [12.005, 14] }],
  ],
});
