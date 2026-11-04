import { createIcon } from "../runtime/createIcon.js";

export const MessageCircleReply = createIcon("MessageCircleReply", "message-circle-reply", {
  nodes: [
    [
      "path",
      { d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" },
      { r: "press", a: 0.04, o: [12, 12.001] },
    ],
    ["path", { d: "m10 15-3-3 3-3" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M7 12h8a2 2 0 0 1 2 2v1" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [12, 12] }],
  ],
});
