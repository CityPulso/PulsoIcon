import { icon } from "../icon.js";

export const RouteOff = icon("RouteOff", "route-off", {
  nodes: [
    ["circle", { cx: "6", cy: "19", r: "3" }, { r: "pop", o: [6, 19] }],
    ["path", { d: "M9 19h8.5c.4 0 .9-.1 1.3-.2" }, { r: "draw", d: 0.05, o: [12.009, 12] }],
    ["path", { d: "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" }, { r: "draw", d: 0.09, o: [12.009, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.2, o: [12, 12] }],
    ["path", { d: "M21 15.3a3.5 3.5 0 0 0-3.3-3.3" }, { r: "draw", d: 0.13, o: [12.009, 12] }],
    ["path", { d: "M15 5h-4.3" }, { r: "draw", d: 0.17, o: [12.009, 12] }],
    ["circle", { cx: "18", cy: "5", r: "3" }, { r: "pop", d: 0.15, o: [18, 5] }],
  ],
});
