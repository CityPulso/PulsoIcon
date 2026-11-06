import { icon } from "../icon.js";

// Adapted from Iconoir "ruler-minus" (MIT, Copyright (c) 2021 Luca Burgio).
export const RulerMinus = icon("RulerMinus", "ruler-minus", {
  nodes: [
    ["path", { d: "M15 5H18H21" }, { r: "pop", o: [18, 5] }],
    [
      "path",
      {
        d: "M11 7V2.6C11 2.26863 10.7314 2 10.4 2H3.6C3.26863 2 3 2.26863 3 2.6V21.4C3 21.7314 3.26863 22 3.6 22H10.4C10.7314 22 11 21.7314 11 21.4V17M11 7H8M11 7V12M11 12H8M11 12V17M11 17H8",
      },
    ],
  ],
});
