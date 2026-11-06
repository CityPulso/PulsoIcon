import { icon } from "../icon.js";

export const Wolf = icon("Wolf", "wolf", {
  nodes: [
    ["path", { d: "M5 3l3.5 4h7L19 3l1 7 2 3.5-4.5 1.5L12 21l-5.5-6L2 13.5 4 10Z" }, { r: "swing", a: 6, o: [12, 21] }],
    ["path", { d: "M9 11h.01" }, { r: "blink", d: 0.15, o: [12, 11] }],
    ["path", { d: "M15 11h.01" }, { r: "blink", d: 0.15, o: [12, 11] }],
    ["path", { d: "M11 16h2l-1 1z" }, { r: "swing", a: 6, o: [12, 21] }],
  ],
});
