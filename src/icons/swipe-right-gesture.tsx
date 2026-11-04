import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "swipe-right-gesture" (MIT, Copyright (c) 2021 Luca Burgio).
export const SwipeRightGesture = createIcon("SwipeRightGesture", "swipe-right-gesture", {
  nodes: [
    [
      "path",
      { d: "M14 12C14 15.3137 11.3137 18 8 18C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6C11.3137 6 14 8.68629 14 12ZM14 12H22M22 12L19 9M22 12L19 15" },
      { r: "slide", x: 1, y: 0 },
    ],
  ],
});
