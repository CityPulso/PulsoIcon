import { createIcon } from "../runtime/createIcon.js";

export const TextQuote = createIcon("TextQuote", "text-quote", {
  nodes: [
    ["path", { d: "M17 5H3" }, { r: "growX", d: 0.05, o: [3, 5] }],
    ["path", { d: "M21 12H8" }, { r: "growX", d: 0.1, o: [8, 15] }],
    ["path", { d: "M21 19H8" }, { r: "growX", d: 0.16, o: [8, 15] }],
    ["path", { d: "M3 12v7" }, { r: "grow", o: [3, 15] }],
  ],
});
