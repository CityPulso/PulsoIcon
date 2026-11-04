import { createIcon } from "../runtime/createIcon.js";

export const ManaBar = createIcon("ManaBar", "mana-bar", {
  nodes: [
    ["path", { d: "M6 8 3.8 11.8a2.6 2.6 0 1 0 4.4 0z" }, { r: "sway", a: 8, o: [6, 16] }],
    ["rect", { x: "12", y: "9", width: "10", height: "6", rx: "1.5" }, { r: "press", a: 0.04, o: [17, 12] }],
    ["path", { d: "M15 12h3" }, { r: "growX", d: 0.15, o: [15, 12] }],
  ],
});
