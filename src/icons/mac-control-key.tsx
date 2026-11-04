import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "mac-control-key" (MIT, Copyright (c) 2021 Luca Burgio).
export const MacControlKey = createIcon("MacControlKey", "mac-control-key", {
  nodes: [
    [
      "path",
      { d: "M3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19Z" },
      { r: "press", d: 0.05, a: 0.05, o: [12, 12] },
    ],
    ["path", { d: "M8 14L12 10L16 14" }, { r: "bounce", x: 0, y: -1, a: 1.5, o: [12, 12] }],
  ],
});
