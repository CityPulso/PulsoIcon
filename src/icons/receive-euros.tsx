import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "receive-euros" (MIT, Copyright (c) 2021 Luca Burgio).
export const ReceiveEuros = createIcon("ReceiveEuros", "receive-euros", {
  nodes: [
    ["path", { d: "M21 12H13M13 12L16.84 8M13 12L16.84 16" }, { r: "slide", x: -1, y: 0, a: 2, o: [17, 12] }],
    [
      "path",
      { d: "M11 7.50265C10.3565 7.18066 9.63357 7 8.86957 7C6.18018 7 4 9.23858 4 12C4 14.7614 6.18018 17 8.86957 17C9.63357 17 10.3565 16.8193 11 16.4974" },
      { r: "press", d: 0.2, o: [7, 12] },
    ],
    ["path", { d: "M3 11H9" }, { r: "press", d: 0.2, o: [7, 12] }],
    ["path", { d: "M3 13H9" }, { r: "press", d: 0.2, o: [7, 12] }],
  ],
});
