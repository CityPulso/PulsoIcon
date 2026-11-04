import { createIcon } from "../runtime/createIcon.js";

export const XpBar = createIcon("XpBar", "xp-bar", {
  nodes: [
    ["path", { d: "M5.5 8c.4 2.3 1.4 3.4 4 4-2.6.6-3.6 1.7-4 4-.4-2.3-1.4-3.4-4-4 2.6-.6 3.6-1.7 4-4z" }, { r: "twinkle", o: [5.5, 12] }],
    ["rect", { x: "12", y: "9", width: "10", height: "6", rx: "1.5" }, { r: "press", a: 0.04, o: [17, 12] }],
    ["path", { d: "M15 12h3" }, { r: "growX", d: 0.15, o: [15, 12] }],
  ],
});
