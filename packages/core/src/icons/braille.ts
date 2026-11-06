import { icon } from "../icon.js";

export const Braille = icon("Braille", "braille", {
  nodes: [
    ["circle", { cx: "3.5", cy: "6", r: "0.75" }, { r: "pop", d: 0, o: [3.5, 6] }],
    ["circle", { cx: "3.5", cy: "12", r: "0.75" }, { r: "pop", d: 0.05, o: [3.5, 12] }],
    ["circle", { cx: "8", cy: "6", r: "0.75" }, { r: "pop", d: 0.1, o: [8, 6] }],
    ["path", { d: "M8 12h.01" }, { r: "fade", o: [8, 12] }],
    ["path", { d: "M3.5 18h.01" }, { r: "fade", o: [3.5, 18] }],
    ["path", { d: "M8 18h.01" }, { r: "fade", o: [8, 18] }],
    ["circle", { cx: "16", cy: "6", r: "0.75" }, { r: "pop", d: 0.15, o: [16, 6] }],
    ["circle", { cx: "20.5", cy: "12", r: "0.75" }, { r: "pop", d: 0.2, o: [20.5, 12] }],
    ["circle", { cx: "16", cy: "18", r: "0.75" }, { r: "pop", d: 0.25, o: [16, 18] }],
    ["circle", { cx: "20.5", cy: "18", r: "0.75" }, { r: "pop", d: 0.3, o: [20.5, 18] }],
    ["path", { d: "M20.5 6h.01" }, { r: "fade", o: [20.5, 6] }],
    ["path", { d: "M16 12h.01" }, { r: "fade", o: [16, 12] }],
  ],
});
