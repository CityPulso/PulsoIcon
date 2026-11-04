import { createIcon } from "../runtime/createIcon.js";

export const BotMessageSquare = createIcon("BotMessageSquare", "bot-message-square", {
  nodes: [
    ["path", { d: "M12 6V2H8" }, { r: "swing", d: 0.05, a: 14, o: [12, 6] }],
    ["path", { d: "M15 11v2" }, { r: "blink", d: 0.12, o: [12, 12] }],
    ["path", { d: "M2 12h2" }, { r: "fade", d: 0.2, o: [12, 12] }],
    ["path", { d: "M20 12h2" }, { r: "fade", d: 0.2, o: [12, 12] }],
    ["path", { d: "M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" }, { r: "wobble", a: 5, o: [12, 14] }],
    ["path", { d: "M9 11v2" }, { r: "blink", d: 0.12, o: [12, 12] }],
  ],
});
