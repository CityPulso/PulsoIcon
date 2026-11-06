import { icon } from "../icon.js";

export const ClipboardHeart = icon("ClipboardHeart", "clipboard-heart", {
  nodes: [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }, { r: "lift", o: [12, 4] }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }, { r: "press", d: 0.05, a: 0.04, o: [12, 22] }],
    ["path", { d: "M8.62 14.3A2.25 2.25 0 1 1 12 11.336a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" }, { r: "beat", d: 0.1, o: [12, 14] }],
  ],
});
