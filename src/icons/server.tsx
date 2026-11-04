import { createIcon } from "../runtime/createIcon.js";

export const Server = createIcon("Server", "server", {
  nodes: [
    ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2" }, { r: "slide", x: -1, a: 1, o: [12, 6] }],
    ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2" }, { r: "slide", d: 0.06, x: 1, a: 1, o: [12, 18] }],
    ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6" }, { r: "flicker", d: 0.1, o: [6.005, 12] }],
    ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18" }, { r: "flicker", d: 0.18, o: [6.005, 12] }],
  ],
});
