import { createIcon } from "../runtime/createIcon.js";

export const Smartphone = createIcon("Smartphone", "smartphone", {
  nodes: [
    ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2" }, { r: "ring", a: 6, o: [12, 12] }],
    ["path", { d: "M12 18h.01" }, { r: "flicker", d: 0.1, o: [12.005, 18] }],
  ],
});
