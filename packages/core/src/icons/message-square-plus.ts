import { icon } from "../icon.js";

export const MessageSquarePlus = icon("MessageSquarePlus", "message-square-plus", {
  nodes: [
    [
      "path",
      { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" },
      { r: "press", a: 0.04, o: [12, 12.498] },
    ],
    ["path", { d: "M12 8v6" }, { r: "spin", d: 0.1, a: 90, o: [12, 11] }],
    ["path", { d: "M9 11h6" }, { r: "spin", d: 0.1, a: 90, o: [12, 11] }],
  ],
});
