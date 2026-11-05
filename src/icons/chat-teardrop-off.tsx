import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "chat-teardrop-slash" (MIT, Copyright (c) 2023 Phosphor Icons).
// Solid from Phosphor Icons "chat-teardrop" fill (MIT, Copyright (c) 2023 Phosphor Icons).
export const ChatTeardropOff = createIcon("ChatTeardropOff", "chat-teardrop-off", {
  nodes: [
    ["path", { d: "M8.2 3.84A9 9 0 0 1 20.16 15.8" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M15.8 20.16A9 9 0 0 1 12 21H4a1 1 0 0 1-1-1v-8a9 9 0 0 1 .84-3.8" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M21.75 11.625A9.385 9.385 0 0 1 12.375 21H4.5a1.5 1.5 0 0 1-1.5-1.5V11.625a9.375 9.375 0 0 1 18.75 0Z", stroke: "none" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
