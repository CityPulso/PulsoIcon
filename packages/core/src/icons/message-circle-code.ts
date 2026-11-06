import { icon } from "../icon.js";

export const MessageCircleCode = icon("MessageCircleCode", "message-circle-code", {
  nodes: [
    ["path", { d: "m10 9-3 3 3 3" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [8.5, 12] }],
    ["path", { d: "m14 15 3-3-3-3" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [15.5, 12] }],
    [
      "path",
      { d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" },
      { r: "press", a: 0.04, o: [12, 12.001] },
    ],
  ],
});
