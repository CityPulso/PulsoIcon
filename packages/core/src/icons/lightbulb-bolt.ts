import { icon } from "../icon.js";

export const LightbulbBolt = icon("LightbulbBolt", "lightbulb-bolt", {
  nodes: [
    ["path", { d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" }, { r: "pulse", a: 0.05, o: [12, 8] }],
    ["path", { d: "M9 18h6" }, { r: "growX", d: 0.15, o: [12, 18] }],
    ["path", { d: "M10 22h4" }, { r: "growX", d: 0.22, o: [12, 22] }],
    ["path", { d: "m13 5-2.5 3.5h3.5L11.5 12" }, { r: "draw", d: 0.05, o: [12, 8.5] }],
  ],
});
