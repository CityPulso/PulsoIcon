import { icon } from "../icon.js";

// Adapted from Iconoir "ev-charge-alt" (MIT, Copyright (c) 2021 Luca Burgio).
export const EvChargeAlt = icon("EvChargeAlt", "ev-charge-alt", {
  nodes: [
    ["path", { d: "M22 5L20 9L18 5" }, { r: "draw", d: 0.15, o: [20, 7] }],
    ["path", { d: "M16 5H14V9L16 9" }, { r: "draw", d: 0, o: [15, 7] }],
    ["path", { d: "M14 7H15.5" }, { r: "draw", d: 0.05, o: [14.75, 7] }],
    ["path", { d: "M6 9V19C6 20.1046 6.89543 21 8 21H17C18.1046 21 19 20.1046 19 19V14" }],
    [
      "path",
      { d: "M9 5.6V7C9 8.10457 8.10457 9 7 9H5C3.89543 9 3 8.10457 3 7V5.6C3 5.26863 3.26863 5 3.6 5H8.4C8.73137 5 9 5.26863 9 5.6Z" },
      { r: "slide", y: -1, a: 1, o: [6, 6] },
    ],
    ["path", { d: "M4 5V3" }, { r: "slide", y: -1, a: 1, o: [6, 6] }],
    ["path", { d: "M8 5V3" }, { r: "slide", y: -1, a: 1, o: [6, 6] }],
  ],
});
