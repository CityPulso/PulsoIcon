import { createIcon } from "../runtime/createIcon.js";

export const PocketKnife = createIcon("PocketKnife", "pocket-knife", {
  nodes: [
    ["path", { d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2" }, { r: "turn", a: -30, o: [5, 13] }],
    ["path", { d: "M18 6h.01" }, { r: "pop", d: 0.15, o: [18.005, 6] }],
    ["path", { d: "M6 18h.01" }, { r: "pop", d: 0.2, o: [6.005, 18] }],
    ["path", { d: "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M18 11.66V22a4 4 0 0 0 4-4V6" }, { r: "turn", d: 0.05, a: 20, o: [18, 8] }],
  ],
});
