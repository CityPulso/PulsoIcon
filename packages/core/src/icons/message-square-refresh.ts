import { icon } from "../icon.js";

export const MessageSquareRefresh = icon("MessageSquareRefresh", "message-square-refresh", {
  nodes: [
    [
      "path",
      { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" },
      { r: "press", a: 0.04, o: [12, 12.498] },
    ],
    ["path", { d: "M7.5 11a4.5 4.5 0 0 1 4.5-4.5 4.875 4.875 0 0 1 3.37 1.37L16.5 9" }, { r: "spin", d: 0.1, a: 360, o: [12, 11] }],
    ["path", { d: "M16.5 6.5V9H14" }, { r: "spin", d: 0.1, a: 360, o: [12, 11] }],
    ["path", { d: "M16.5 11a4.5 4.5 0 0 1-4.5 4.5 4.875 4.875 0 0 1-3.37-1.37L7.5 13" }, { r: "spin", d: 0.1, a: 360, o: [12, 11] }],
    ["path", { d: "M10 13H7.5v2.5" }, { r: "spin", d: 0.1, a: 360, o: [12, 11] }],
  ],
});
