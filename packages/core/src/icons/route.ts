import { icon } from "../icon.js";

export const Route = icon("Route", "route", {
  nodes: [
    ["circle", { cx: "6", cy: "19", r: "3" }, { r: "pop", o: [6, 19] }],
    ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["circle", { cx: "18", cy: "5", r: "3" }, { r: "pop", d: 0.3, o: [18, 5] }],
  ],
});
