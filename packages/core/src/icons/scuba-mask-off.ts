import { icon } from "../icon.js";

// Adapted from Tabler Icons "scuba-mask-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ScubaMaskOff = icon("ScubaMaskOff", "scuba-mask-off", {
  nodes: [
    [
      "path",
      {
        d: "M11 7h5a1 1 0 0 1 1 1v4.5c0 .154 -.014 .304 -.04 .45m-2 2.007c-.15 .028 -.305 .043 -.463 .043h-.5a2 2 0 0 1 -2 -2a2 2 0 1 0 -4 0a2 2 0 0 1 -2 2h-.5a2.5 2.5 0 0 1 -2.5 -2.5v-4.5a1 1 0 0 1 1 -1h3",
      },
      { r: "bounce", y: -1, a: 1 },
    ],
    ["path", { d: "M10 17a2 2 0 0 0 2 2h3.5a5.475 5.475 0 0 0 2.765 -.744m2 -2c.47 -.81 .739 -1.752 .739 -2.756v-9.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    [
      "path",
      { d: "M4 7h12a1 1 0 0 1 1 1v4.5a2.5 2.5 0 0 1 -2.5 2.5h-.5a2 2 0 0 1 -2 -2a2 2 0 1 0 -4 0a2 2 0 0 1 -2 2h-.5a2.5 2.5 0 0 1 -2.5 -2.5v-4.5a1 1 0 0 1 1 -1" },
      { r: "bounce", y: -1, a: 1 },
    ],
    ["path", { d: "M10 17a2 2 0 0 0 2 2h3.5a5.5 5.5 0 0 0 5.5 -5.5v-9.5", fill: "none" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
