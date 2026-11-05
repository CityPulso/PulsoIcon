import { createIcon } from "../runtime/createIcon.js";

export const BotOff = createIcon("BotOff", "bot-off", {
  nodes: [
    ["path", { d: "M13.67 8H18a2 2 0 0 1 2 2v4.33" }, { r: "wobble", o: [12, 12] }],
    ["path", { d: "M2 14h2" }, { r: "wobble", o: [12, 12] }],
    ["path", { d: "M20 14h2" }, { r: "wobble", o: [12, 12] }],
    ["path", { d: "M22 22 2 2" }, { r: "draw", d: 0.15, o: [12, 12] }],
    ["path", { d: "M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586" }, { r: "wobble", o: [12, 12] }],
    ["path", { d: "M9 13v2" }, { r: "wobble", o: [12, 12] }],
    ["path", { d: "M9.67 4H12v2.33" }, { r: "wobble", o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M12 8V4H8", fill: "none" }, { r: "wobble", o: [12, 12] }],
    ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2" }, { r: "wobble", o: [12, 12] }],
    ["path", { d: "M2 14h2", fill: "none" }, { r: "wobble", o: [12, 12] }],
    ["path", { d: "M20 14h2", fill: "none" }, { r: "wobble", o: [12, 12] }],
    ["path", { d: "M15 13v2" }, { r: "wobble", o: [12, 12] }, "line"],
    ["path", { d: "M9 13v2" }, { r: "wobble", o: [12, 12] }, "line"],
    ["path", { d: "M22 22 2 2" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
