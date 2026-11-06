import { icon } from "../icon.js";

export const SendToBack = icon("SendToBack", "send-to-back", {
  nodes: [
    ["rect", { x: "14", y: "14", width: "8", height: "8", rx: "2" }, { r: "slide", x: 1, y: 1, a: 1.5, o: [18, 18] }],
    ["rect", { x: "2", y: "2", width: "8", height: "8", rx: "2" }, { r: "slide", x: -1, y: -1, a: 1.5, o: [6, 6] }],
    ["path", { d: "M7 14v1a2 2 0 0 0 2 2h1" }, { r: "fade", d: 0.1, o: [12, 12] }],
    ["path", { d: "M14 7h1a2 2 0 0 1 2 2v1" }, { r: "fade", d: 0.1, o: [12, 12] }],
  ],
});
