import { icon } from "../icon.js";

export const SquareDashedMousePointer = icon("SquareDashedMousePointer", "square-dashed-mouse-pointer", {
  nodes: [
    [
      "path",
      { d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" },
      { r: "bounce", d: 0.1, x: -1, y: -1, a: 2, o: [16.999, 16.999] },
    ],
    ["path", { d: "M5 3a2 2 0 0 0-2 2" }, { r: "spin", a: 45, o: [10, 10] }],
    ["path", { d: "M19 3a2 2 0 0 1 2 2" }, { r: "spin", a: 45, o: [10, 10] }],
    ["path", { d: "M5 21a2 2 0 0 1-2-2" }, { r: "spin", a: 45, o: [10, 10] }],
    ["path", { d: "M9 3h1" }, { r: "spin", a: 45, o: [10, 10] }],
    ["path", { d: "M9 21h2" }, { r: "spin", a: 45, o: [10, 10] }],
    ["path", { d: "M14 3h1" }, { r: "spin", a: 45, o: [10, 10] }],
    ["path", { d: "M3 9v1" }, { r: "spin", a: 45, o: [10, 10] }],
    ["path", { d: "M21 9v2" }, { r: "spin", a: 45, o: [10, 10] }],
    ["path", { d: "M3 14v1" }, { r: "spin", a: 45, o: [10, 10] }],
  ],
});
