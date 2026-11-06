import { icon } from "../icon.js";

export const Seaweed = icon("Seaweed", "seaweed", {
  nodes: [
    ["path", { d: "M9 21q-2-2.5 0-5t0-5 0-5 0-4" }, { r: "sway", a: 8, o: [9, 21] }],
    ["path", { d: "M15 21q2-2 0-4t0-4 0-4" }, { r: "sway", d: 0.1, a: -8, o: [15, 21] }],
    ["path", { d: "M5 21h14" }, { r: "growX", o: [12, 21] }],
  ],
});
