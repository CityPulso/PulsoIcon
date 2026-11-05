import { createIcon } from "../runtime/createIcon.js";

export const LightbulbOff = createIcon("LightbulbOff", "lightbulb-off", {
  nodes: [
    ["path", { d: "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5" }, { r: "sway", a: 5, o: [12, 22] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }],
    ["path", { d: "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5" }, { r: "sway", a: 5, o: [12, 22] }],
    ["path", { d: "M9 18h6" }, { r: "sway", a: 5, o: [12, 22] }],
    ["path", { d: "M10 22h4" }, { r: "sway", a: 5, o: [12, 22] }],
  ],
  solid: [
    ["path", { d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5", fill: "none" }, { r: "sway", a: 5, o: [12, 22] }],
    ["path", { d: "M9 18h6", fill: "none" }, { r: "sway", a: 5, o: [12, 22] }],
    ["path", { d: "M10 22h4", fill: "none" }, { r: "sway", a: 5, o: [12, 22] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
