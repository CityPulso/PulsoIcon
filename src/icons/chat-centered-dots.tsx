import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "chat-centered-dots" (MIT, Copyright (c) 2023 Phosphor Icons).
export const ChatCenteredDots = createIcon("ChatCenteredDots", "chat-centered-dots", {
  nodes: [
    ["path", { d: "M4 3h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-5l-3 3-3-3H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8 10.5h.01" }, { r: "bounce", d: 0.05, y: -1, a: 1.5, o: [8.005, 10.5] }],
    ["path", { d: "M12 10.5h.01" }, { r: "bounce", d: 0.13, y: -1, a: 1.5, o: [12.005, 10.5] }],
    ["path", { d: "M16 10.5h.01" }, { r: "bounce", d: 0.21, y: -1, a: 1.5, o: [16.005, 10.5] }],
  ],
});
