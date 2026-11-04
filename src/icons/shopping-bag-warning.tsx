import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "shopping-bag-warning" (MIT, Copyright (c) 2021 Luca Burgio).
export const ShoppingBagWarning = createIcon("ShoppingBagWarning", "shopping-bag-warning", {
  nodes: [
    [
      "path",
      {
        d: "M20 14.5L19.2609 9.69588C19.1108 8.72022 18.2713 8 17.2842 8H6.71584C5.7287 8 4.8892 8.72022 4.73909 9.69589L3.35448 18.6959C3.16809 19.9074 4.10545 21 5.33122 21H12",
      },
    ],
    ["path", { d: "M17.5 17L17.5 19" }, { r: "draw" }],
    ["path", { d: "M17.5 22.01L17.51 21.9989" }, { r: "pop", d: 0.3, o: [17.5, 22] }],
    ["path", { d: "M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5" }],
  ],
});
