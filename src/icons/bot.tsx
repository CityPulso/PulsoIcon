import { createIcon } from "../runtime/createIcon.js";

export const Bot = createIcon("Bot", "bot", {
  nodes: [
    ["path", { d: "M12 8V4H8" }, { r: "swing", d: 0.05, a: 14, o: [12, 8] }],
    ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2" }, { r: "wobble", a: 5, o: [12, 14] }],
    ["path", { d: "M2 14h2" }, { r: "fade", d: 0.2, o: [12, 14] }],
    ["path", { d: "M20 14h2" }, { r: "fade", d: 0.2, o: [12, 14] }],
    ["path", { d: "M15 13v2" }, { r: "blink", d: 0.12, o: [12, 14] }],
    ["path", { d: "M9 13v2" }, { r: "blink", d: 0.12, o: [12, 14] }],
  ],
});
