import { icon } from "../icon.js";

export const MessageSquareCode = icon("MessageSquareCode", "message-square-code", {
  nodes: [
    [
      "path",
      { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" },
      { r: "press", a: 0.04, o: [12, 12.498] },
    ],
    ["path", { d: "m10 8-3 3 3 3" }, { r: "slide", d: 0.1, x: -1, a: 1.5, o: [8.5, 11] }],
    ["path", { d: "m14 14 3-3-3-3" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [15.5, 11] }],
  ],
});
