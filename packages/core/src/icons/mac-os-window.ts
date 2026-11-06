import { icon } from "../icon.js";

// Adapted from Iconoir "mac-os-window" (MIT, Copyright (c) 2021 Luca Burgio).
export const MacOsWindow = icon("MacOsWindow", "mac-os-window", {
  nodes: [
    [
      "path",
      {
        d: "M2 17.7143V6.28571C2 5.02335 2.99492 4 4.22222 4H19.7778C21.0051 4 22 5.02335 22 6.28571V17.7143C22 18.9767 21.0051 20 19.7778 20H4.22222C2.99492 20 2 18.9767 2 17.7143Z",
      },
    ],
    ["path", { d: "M5 7.01013L5.01 6.99902" }, { r: "pop", o: [5, 7] }],
    ["path", { d: "M7 7.01013L7.01 6.99902" }, { r: "pop", d: 0.08, o: [7, 7] }],
    ["path", { d: "M9 7.01013L9.01 6.99902" }, { r: "pop", d: 0.16, o: [9, 7] }],
  ],
});
