import { icon } from "../icon.js";

export const PenLine = icon("PenLine", "pen-line", {
  nodes: [
    ["path", { d: "M13 21h8" }, { r: "growX", d: 0.1, o: [13, 21] }],
    [
      "path",
      { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" },
      { r: "tilt", a: 10, o: [3, 21] },
    ],
  ],
});
