import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "heavy-rain" (MIT, Copyright (c) 2021 Luca Burgio).
export const HeavyRain = createIcon("HeavyRain", "heavy-rain", {
  nodes: [
    ["path", { d: "M8 13V20" }, { r: "drop", a: 4 }],
    ["path", { d: "M16 13V20" }, { r: "drop", d: 0.2, a: 4 }],
    ["path", { d: "M12 15V22" }, { r: "drop", d: 0.1, a: 4 }],
    [
      "path",
      { d: "M20 17.6073C21.4937 17.0221 23 15.6889 23 13C23 9 19.6667 8 18 8C18 6 18 2 12 2C6 2 6 6 6 8C4.33333 8 1 9 1 13C1 15.6889 2.50628 17.0221 4 17.6073" },
      { r: "float", a: 1 },
    ],
  ],
});
