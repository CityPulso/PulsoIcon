import { icon } from "../icon.js";

export const Jellyfish = icon("Jellyfish", "jellyfish", {
  svg: { r: "float", a: 2 },
  nodes: [
    ["path", { d: "M4 12a8 8 0 0 1 16 0q-1.33 1.5-2.67 0t-2.66 0-2.67 0-2.67 0-2.66 0-2.67 0Z" }, { r: "jelly", a: 0.12, o: [12, 12] }],
    ["path", { d: "M8 15q-1 1.5 0 3t0 3" }, { r: "sway", d: 0.05, a: 10, o: [8, 15] }],
    ["path", { d: "M12 15q1 1.5 0 3t0 3" }, { r: "sway", d: 0.1, a: -10, o: [12, 15] }],
    ["path", { d: "M16 15q-1 1.5 0 3t0 3" }, { r: "sway", d: 0.15, a: 10, o: [16, 15] }],
  ],
});
