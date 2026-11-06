import { icon } from "../icon.js";

// Adapted from Iconoir "redo-action" (MIT, Copyright (c) 2021 Luca Burgio).
export const RedoAction = icon("RedoAction", "redo-action", {
  nodes: [
    ["path", { d: "M19 5V8V11" }, { r: "press", d: 0.2, o: [19, 8] }],
    [
      "path",
      {
        d: "M15.4999 8C11.4999 8 12.9999 8 8.99995 8C8.99995 8 8.99995 8 8.99995 8C8.99995 8 3.99995 8 3.99995 12.7059C3.99995 18 8.99995 18 8.99995 18C12.4285 18 14.2857 18 17.7142 18",
      },
      { r: "slide", x: 1, y: 0, a: 1.5, o: [12, 12] },
    ],
    ["path", { d: "M12.5 11.5C13.8668 10.1332 14.6332 9.36683 16 8C14.6332 6.63317 13.8668 5.86683 12.5 4.5" }, { r: "slide", x: 1, y: 0, a: 1.5, o: [12, 12] }],
  ],
});
