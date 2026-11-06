import { icon } from "../icon.js";

export const LightbulbSparkle = icon("LightbulbSparkle", "lightbulb-sparkle", {
  nodes: [
    ["path", { d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" }, { r: "pulse", a: 0.05, o: [12, 8] }],
    ["path", { d: "M9 18h6" }, { r: "growX", d: 0.15, o: [12, 18] }],
    ["path", { d: "M10 22h4" }, { r: "growX", d: 0.22, o: [12, 22] }],
    ["path", { d: "M12 5c.3 1.8 1.2 2.7 3 3-1.8.3-2.7 1.2-3 3-.3-1.8-1.2-2.7-3-3 1.8-.3 2.7-1.2 3-3z" }, { r: "twinkle", d: 0.1, o: [12, 8] }],
  ],
});
