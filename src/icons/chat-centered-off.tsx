import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "chat-centered-slash" (MIT, Copyright (c) 2023 Phosphor Icons).
// Solid from Phosphor Icons "chat-centered" fill (MIT, Copyright (c) 2023 Phosphor Icons).
export const ChatCenteredOff = createIcon("ChatCenteredOff", "chat-centered-off", {
  nodes: [
    ["path", { d: "M18 18h-3l-3 3-3-3H4a2 2 0 0 1-2-2V5a2 2 0 0 1 1.18-1.82" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8.66 3H20a2 2 0 0 1 2 2v10.34" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M21.75 5.25V17.25a1.5 1.5 0 0 1-1.5 1.5H14.585l-1.282 2.244a1.5 1.5 0 0 1-2.604 0L9.415 18.75H3.75a1.5 1.5 0 0 1-1.5-1.5V5.25A1.5 1.5 0 0 1 3.75 3.75H20.25A1.5 1.5 0 0 1 21.75 5.25Z",
        stroke: "none",
      },
      { r: "press", a: 0.04, o: [12, 12] },
    ],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
