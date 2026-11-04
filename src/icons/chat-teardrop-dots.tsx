import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "chat-teardrop-dots" (MIT, Copyright (c) 2023 Phosphor Icons).
export const ChatTeardropDots = createIcon("ChatTeardropDots", "chat-teardrop-dots", {
  nodes: [
    ["path", { d: "M12 21H4a1 1 0 0 1-1-1v-8a9 9 0 1 1 9 9z" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8 12h.01" }, { r: "bounce", d: 0.05, y: -1, a: 1.5, o: [8.01, 12] }],
    ["path", { d: "M12 12h.01" }, { r: "bounce", d: 0.13, y: -1, a: 1.5, o: [12.01, 12] }],
    ["path", { d: "M16 12h.01" }, { r: "bounce", d: 0.21, y: -1, a: 1.5, o: [16, 12] }],
  ],
});
