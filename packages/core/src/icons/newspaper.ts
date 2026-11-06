import { icon } from "../icon.js";

export const Newspaper = icon("Newspaper", "newspaper", {
  nodes: [
    ["path", { d: "M15 18h-5" }, { r: "growX", d: 0.22, o: [10, 18] }],
    ["path", { d: "M18 14h-8" }, { r: "growX", d: 0.15, o: [10, 14] }],
    ["path", { d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" }, { r: "open", o: [12, 12] }],
    ["rect", { width: "8", height: "4", x: "10", y: "6", rx: "1" }, { r: "pop", d: 0.1, o: [14, 8] }],
  ],
});
