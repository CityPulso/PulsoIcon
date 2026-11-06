import { icon } from "../icon.js";

export const Hdr = icon("Hdr", "hdr", {
  nodes: [
    ["path", { d: "M2 7v10" }, { r: "draw", d: 0.05, o: [4, 12] }],
    ["path", { d: "M6 7v10" }, { r: "draw", d: 0.05, o: [4, 12] }],
    ["path", { d: "M2 12h4" }, { r: "draw", d: 0.05, o: [4, 12] }],
    ["path", { d: "M9 7h.5a5 5 0 0 1 0 10H9z" }, { r: "draw", d: 0.15, o: [11.75, 12] }],
    ["path", { d: "M17.5 17V7H19a2.5 2.5 0 0 1 0 5h-1.5" }, { r: "draw", d: 0.25, o: [19.75, 12] }],
    ["path", { d: "m19.5 12 2 5" }, { r: "draw", d: 0.25, o: [19.75, 12] }],
  ],
});
