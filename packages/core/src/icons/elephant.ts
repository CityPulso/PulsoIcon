import { icon } from "../icon.js";

export const Elephant = icon("Elephant", "elephant", {
  nodes: [
    ["path", { d: "M8 20v-3h7v3h4v-7a7 7 0 0 0-7-7H8a5 5 0 0 0-5 5v7.5a1.5 1.5 0 0 0 3 0V15" }, { r: "bounce", y: -1, a: 1, o: [12, 20] }],
    ["path", { d: "M8 20h-.01" }, { r: "bounce", y: -1, a: 1, o: [12, 20] }],
    ["path", { d: "M9 6.5c-1 2-1 5 .5 6.5H12c1-1.5 1-4.5 0-6.5" }, { r: "swing", d: 0.1, a: 12, o: [10.5, 7] }],
    ["path", { d: "M6 10h.01" }, { r: "blink", d: 0.2, o: [6, 10] }],
    ["path", { d: "M19 11.5c1.5 0 2 1 2 2.5" }, { r: "swing", d: 0.15, a: 20, o: [19, 11.5] }],
  ],
});
