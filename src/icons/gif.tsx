import { createIcon } from "../runtime/createIcon.js";

export const Gif = createIcon("Gif", "gif", {
  nodes: [
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M10 9H7.5A1.5 1.5 0 0 0 6 10.5v3A1.5 1.5 0 0 0 7.5 15H10v-3H8.5" }, { r: "pop", d: 0.05, o: [8, 12] }],
    ["path", { d: "M13 9v6" }, { r: "pop", d: 0.12, o: [13, 12] }],
    ["path", { d: "M19 9h-3v6" }, { r: "pop", d: 0.19, o: [17.5, 12] }],
    ["path", { d: "M16 12h2" }, { r: "pop", d: 0.19, o: [17.5, 12] }],
  ],
});
