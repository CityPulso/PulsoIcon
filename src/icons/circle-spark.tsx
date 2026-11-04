import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "circle-spark" (MIT, Copyright (c) 2021 Luca Burgio).
export const CircleSpark = createIcon("CircleSpark", "circle-spark", {
  nodes: [
    ["path", { d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2" }],
    [
      "path",
      { d: "M13 6.5C16.1338 6.5 17.5 5.18153 17.5 2C17.5 5.18153 18.8567 6.5 22 6.5C18.8567 6.5 17.5 7.85669 17.5 11C17.5 7.85669 16.1338 6.5 13 6.5Z" },
      { r: "twinkle", o: [17.5, 6.5] },
    ],
  ],
});
