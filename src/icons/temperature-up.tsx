import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "temperature-up" (MIT, Copyright (c) 2021 Luca Burgio).
export const TemperatureUp = createIcon("TemperatureUp", "temperature-up", {
  nodes: [
    [
      "path",
      { d: "M4 11.9995C2.78555 12.9117 2 14.3641 2 15.9999C2 18.7613 4.23858 20.9999 7 20.9999C9.76142 20.9999 12 18.7613 12 15.9999C12 14.3641 11.2144 12.9117 10 11.9995" },
    ],
    ["path", { d: "M4 12V3H10V12" }],
    ["path", { d: "M10 3L12 3" }],
    ["path", { d: "M10 6L12 6" }],
    ["path", { d: "M10 9H12" }],
    ["path", { d: "M7 14C5.89543 14 5 14.8954 5 16C5 17.1046 5.89543 18 7 18C8.10457 18 9 17.1046 9 16C9 14.8954 8.10457 14 7 14ZM7 14V6" }, { r: "pulse", d: 0.1, o: [7, 16] }],
    ["path", { d: "M19 18V6M19 6L21.5 8.5M19 6L16.5 8.5" }, { r: "slide", x: 0, y: -1 }],
  ],
});
