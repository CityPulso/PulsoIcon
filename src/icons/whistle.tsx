import { createIcon } from "../runtime/createIcon.js";

export const Whistle = createIcon("Whistle", "whistle", {
  nodes: [
    ["path", { d: "M10 6v4" }, { r: "flicker", d: 0.05, o: [10, 8] }],
    ["path", { d: "M21 6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.675A7 7 0 1 1 9 6z" }, { r: "shake", a: 1, o: [12, 13] }],
  ],
});
