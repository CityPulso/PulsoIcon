import { icon } from "../icon.js";

export const ReceiveMoney = icon("ReceiveMoney", "receive-money", {
  nodes: [
    ["path", { d: "M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" }, { r: "press", d: 0.2, a: 0.05, o: [8, 18] }],
    ["path", { d: "m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" }, { r: "press", d: 0.2, a: 0.05, o: [8, 18] }],
    ["path", { d: "m2 16 6 6" }, { r: "press", d: 0.2, a: 0.05, o: [8, 18] }],
    ["circle", { cx: "16", cy: "9", r: "2.9" }, { r: "drop", d: 0.1, a: 3, o: [16, 9] }],
    ["path", { d: "M6 2v7" }, { r: "slide", y: 1, a: 1.5, o: [6, 5.5] }],
    ["path", { d: "m3 6 3 3 3-3" }, { r: "slide", y: 1, a: 1.5, o: [6, 5.5] }],
  ],
});
