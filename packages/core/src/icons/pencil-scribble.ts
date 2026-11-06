import { icon } from "../icon.js";

export const PencilScribble = icon("PencilScribble", "pencil-scribble", {
  nodes: [
    [
      "path",
      { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" },
      { r: "tilt", a: 10, o: [3, 21] },
    ],
    ["path", { d: "m15 5 4 4" }, { r: "tilt", a: 10, o: [3, 21] }],
    ["path", { d: "M12 20.5c1.4 0 1.6-1.5 3-1.5s1.6 1.5 3 1.5 1.6-1.5 3-1.5" }, { r: "draw", d: 0.15, o: [16, 19.75] }],
  ],
});
