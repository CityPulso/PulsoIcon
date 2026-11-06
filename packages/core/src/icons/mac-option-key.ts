import { icon } from "../icon.js";

// Adapted from Iconoir "mac-option-key" (MIT, Copyright (c) 2021 Luca Burgio).
export const MacOptionKey = icon("MacOptionKey", "mac-option-key", {
  nodes: [
    [
      "path",
      { d: "M3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19Z" },
      { r: "press", d: 0.05, a: 0.05, o: [12, 12] },
    ],
    ["path", { d: "M14 10H15.125H17" }, { r: "draw" }],
    ["path", { d: "M17 14L14.9167 14L12 14L10.3333 10H7" }, { r: "draw", d: 0.1 }],
  ],
});
