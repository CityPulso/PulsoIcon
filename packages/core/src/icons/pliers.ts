import { icon } from "../icon.js";

export const Pliers = icon("Pliers", "pliers", {
  nodes: [
    ["path", { d: "M10.6 9.4 8.8 4.6A1.9 1.9 0 0 1 10.6 2h2.8a1.9 1.9 0 0 1 1.8 2.6l-1.8 4.8" }, { r: "jelly", d: 0.15, o: [12, 9] }],
    ["path", { d: "M12 4v3" }, { r: "jelly", d: 0.15, o: [12, 9] }],
    ["circle", { cx: "12", cy: "11", r: "1.5" }, { r: "pop", d: 0.1, o: [12, 11] }],
    ["path", { d: "M10.8 12C9 14.6 6.6 17.2 5.5 21.5" }, { r: "turn", a: 10, o: [12, 11] }],
    ["path", { d: "M13.2 12c1.8 2.6 4.2 5.2 5.3 9.5" }, { r: "turn", a: -10, o: [12, 11] }],
  ],
});
