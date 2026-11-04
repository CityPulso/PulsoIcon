import { createIcon } from "../runtime/createIcon.js";

export const MessageSquareMore = createIcon("MessageSquareMore", "message-square-more", {
  nodes: [
    [
      "path",
      { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" },
      { r: "press", a: 0.04, o: [12, 12.498] },
    ],
    ["path", { d: "M12 11h.01" }, { r: "bounce", d: 0.13, y: -1, a: 1.5, o: [12.005, 11] }],
    ["path", { d: "M16 11h.01" }, { r: "bounce", d: 0.21, y: -1, a: 1.5, o: [16.005, 11] }],
    ["path", { d: "M8 11h.01" }, { r: "bounce", d: 0.05, y: -1, a: 1.5, o: [8.005, 11] }],
  ],
});
