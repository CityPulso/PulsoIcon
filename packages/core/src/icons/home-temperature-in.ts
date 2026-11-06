import { icon } from "../icon.js";

// Adapted from Iconoir "home-temperature-in" (MIT, Copyright (c) 2021 Luca Burgio).
export const HomeTemperatureIn = icon("HomeTemperatureIn", "home-temperature-in", {
  nodes: [
    ["path", { d: "M2 8L11.7317 3.13416C11.9006 3.04971 12.0994 3.0497 12.2683 3.13416L22 8" }],
    ["path", { d: "M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V11" }],
    [
      "path",
      { d: "M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z" },
      { r: "pulse", d: 0.3, a: 0.12, o: [12, 16] },
    ],
    ["path", { d: "M12 7.5V14" }, { r: "grow", o: [12, 14] }],
    ["path", { d: "M12 12H14" }],
    ["path", { d: "M12 9H14" }],
  ],
});
