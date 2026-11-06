import { icon } from "../icon.js";

export const MessageSquareDiff = icon("MessageSquareDiff", "message-square-diff", {
  nodes: [
    [
      "path",
      { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" },
      { r: "press", a: 0.04, o: [12, 12.498] },
    ],
    ["path", { d: "M10 15h4" }, { r: "growX", d: 0.2, o: [12, 15] }],
    ["path", { d: "M10 9h4" }, { r: "spin", d: 0.1, a: 90, o: [12, 9] }],
    ["path", { d: "M12 7v4" }, { r: "spin", d: 0.1, a: 90, o: [12, 9] }],
  ],
});
