import { icon } from "../icon.js";

// Adapted from Iconoir "undo-action" (MIT, Copyright (c) 2021 Luca Burgio).
export const UndoAction = icon("UndoAction", "undo-action", {
  nodes: [
    ["path", { d: "M5 5V8V11" }, { r: "press", d: 0.2, o: [5, 8] }],
    [
      "path",
      {
        d: "M8.50005 8C12.5001 8 11.0001 8 15.0001 8C15.0001 8 15.0001 8 15.0001 8C15.0001 8 20.0001 8 20.0001 12.7059C20.0001 18 15.0001 18 15.0001 18C11.5715 18 9.71434 18 6.28577 18",
      },
      { r: "draw", d: 0.05 },
    ],
    ["path", { d: "M11.5 11.5C10.1332 10.1332 9.36683 9.36683 8 8C9.36683 6.63317 10.1332 5.86683 11.5 4.5" }, { r: "slide", x: -1, y: 0 }],
  ],
});
