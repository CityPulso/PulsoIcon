import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "shopping-code-xmark" (MIT, Copyright (c) 2021 Luca Burgio).
export const ShoppingCodeXmark = createIcon("ShoppingCodeXmark", "shopping-code-xmark", {
  nodes: [
    ["path", { d: "M6 5V7" }],
    ["path", { d: "M10 5V11" }],
    ["path", { d: "M18 5V6" }],
    ["path", { d: "M6 10V16" }],
    ["path", { d: "M6 18.5V19" }],
    ["path", { d: "M10 18.5V19" }],
    ["path", { d: "M10 14V16" }],
    ["path", { d: "M14 13V15" }],
    ["path", { d: "M14 5V10" }],
    ["path", { d: "M18 9V13" }],
    [
      "path",
      { d: "M16.1213 21.364L18.2427 19.2427M18.2427 19.2427L20.364 17.1213M18.2427 19.2427L16.1213 17.1213M18.2427 19.2427L20.364 21.364" },
      { r: "pop", o: [18.24, 19.24] },
    ],
  ],
});
