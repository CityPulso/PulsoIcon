import { icon } from "../icon.js";

export const Clipboard = icon("Clipboard", "clipboard", {
  nodes: [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }, { r: "lift", o: [12, 4] }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
  ],
});
