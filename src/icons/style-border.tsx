import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "style-border" (MIT, Copyright (c) 2021 Luca Burgio).
export const StyleBorder = createIcon("StyleBorder", "style-border", {
  nodes: [
    [
      "path",
      { d: "M16 2H8C4.68629 2 2 4.68629 2 8V16C2 19.3137 4.68629 22 8 22H16C19.3137 22 22 19.3137 22 16V8C22 4.68629 19.3137 2 16 2Z", strokeDasharray: "2 2" },
      { r: "draw", d: 0.1 },
    ],
    [
      "path",
      { d: "M16 5H8C6.34315 5 5 6.34315 5 8V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V8C19 6.34315 17.6569 5 16 5Z" },
      { r: "pulse", a: 0.1, o: [12, 12] },
    ],
  ],
});
