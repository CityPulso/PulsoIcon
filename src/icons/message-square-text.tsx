import { createIcon } from "../runtime/createIcon.js";

export const MessageSquareText = createIcon("MessageSquareText", "message-square-text", {
  nodes: [
    [
      "path",
      { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" },
      { r: "press", a: 0.04, o: [12, 12.498] },
    ],
    ["path", { d: "M7 11h10" }, { r: "growX", d: 0.16, o: [7, 11] }],
    ["path", { d: "M7 15h6" }, { r: "growX", d: 0.22, o: [7, 11] }],
    ["path", { d: "M7 7h8" }, { r: "growX", d: 0.1, o: [7, 11] }],
  ],
});
