import { icon } from "../icon.js";

export const MessageCircleMore = icon("MessageCircleMore", "message-circle-more", {
  nodes: [
    [
      "path",
      { d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" },
      { r: "press", a: 0.04, o: [12, 12.001] },
    ],
    ["path", { d: "M8 12h.01" }, { r: "bounce", d: 0.05, y: -1, a: 1.5, o: [8.005, 12] }],
    ["path", { d: "M12 12h.01" }, { r: "bounce", d: 0.13, y: -1, a: 1.5, o: [12.005, 12] }],
    ["path", { d: "M16 12h.01" }, { r: "bounce", d: 0.21, y: -1, a: 1.5, o: [16.005, 12] }],
  ],
});
