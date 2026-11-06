import { icon } from "../icon.js";

export const MessageCircleWarning = icon("MessageCircleWarning", "message-circle-warning", {
  nodes: [
    [
      "path",
      { d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" },
      { r: "shake", a: 1, o: [12, 12.001] },
    ],
    ["path", { d: "M12 8v4" }, { r: "grow", d: 0.1, o: [12, 8] }],
    ["path", { d: "M12 16h.01" }, { r: "pop", d: 0.25, o: [12.005, 16] }],
  ],
});
