import { icon } from "../icon.js";

export const Pacman = icon("Pacman", "pacman", {
  nodes: [
    ["path", { d: "M20.66 7A10 10 0 1 0 20.66 17L12 12z" }, { r: "jelly", a: 0.08, o: [12, 12] }],
    ["path", { d: "M11 7h.01" }, { r: "blink", d: 0.2, o: [11, 7] }],
    ["path", { d: "M19 12h.01" }, { r: "slide", d: 0.05, x: -1, a: 3, o: [19, 12] }],
  ],
});
