import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "send-dollars" (MIT, Copyright (c) 2021 Luca Burgio).
export const SendDollars = createIcon("SendDollars", "send-dollars", {
  nodes: [
    [
      "path",
      {
        d: "M10 8.23077C9.20085 7.49308 7.79346 6.97998 6.5 6.94785M3 15.2308C3.75189 16.1562 5.1499 16.684 6.5 16.7288M6.5 6.94785C4.96102 6.90962 3.58333 7.55229 3.58333 9.3077C3.58333 12.5385 10 10.9231 10 14.1538C10 15.9965 8.2922 16.7882 6.5 16.7288M6.5 6.94785V5M6.5 16.7288V19",
      },
      { r: "press", o: [6.5, 12] },
    ],
    ["path", { d: "M13 12H21M21 12L17.16 8M21 12L17.16 16" }, { r: "slide", x: 1, y: 0, a: 2, o: [17, 12] }],
  ],
});
