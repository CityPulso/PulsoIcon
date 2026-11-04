import { createIcon } from "../runtime/createIcon.js";

export const PointLeft = createIcon("PointLeft", "point-left", {
  nodes: [
    ["path", { d: "M11 18L10 18A2 2 0 0 1 8 16A2 2 0 0 1 10 14" }, { r: "bounce", x: -1, y: 0, a: 1.5, o: [12, 12] }],
    ["path", { d: "M10 14L9 14A2 2 0 0 1 7 12A2 2 0 0 1 9 10L10 10" }, { r: "bounce", x: -1, y: 0, a: 1.5, o: [12, 12] }],
    ["path", { d: "M9.5 10L4 10A2 2 0 0 1 2 8A2 2 0 0 1 4 6L14 6" }, { r: "bounce", x: -1, y: 0, a: 1.5, o: [12, 12] }],
    [
      "path",
      { d: "M11 18A2 2 0 1 0 11 22L14 22A8 8 0 0 0 22 14L22 12C22 9.2 21.14 7.5 19.66 6.01L16.06 2.41A2 2 0 0 0 13.24 5.24L15 7" },
      { r: "bounce", x: -1, y: 0, a: 1.5, o: [12, 12] },
    ],
  ],
});
