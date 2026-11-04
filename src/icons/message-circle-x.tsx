import { createIcon } from "../runtime/createIcon.js";

export const MessageCircleX = createIcon("MessageCircleX", "message-circle-x", {
  nodes: [
    [
      "path",
      { d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" },
      { r: "shake", a: 1, o: [12, 12.001] },
    ],
    ["path", { d: "m15 9-6 6" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "m9 9 6 6" }, { r: "draw", d: 0.2, o: [12, 12] }],
  ],
});
