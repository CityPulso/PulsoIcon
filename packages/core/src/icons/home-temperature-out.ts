import { icon } from "../icon.js";

// Adapted from Iconoir "home-temperature-out" (MIT, Copyright (c) 2021 Luca Burgio).
export const HomeTemperatureOut = icon("HomeTemperatureOut", "home-temperature-out", {
  nodes: [
    ["path", { d: "M14 8L4.31143 3.15572C4.11885 3.05943 3.88944 3.07371 3.71029 3.19314L2.5 4" }],
    ["path", { d: "M12 11V19C12 20.1046 11.1046 21 10 21H7M7 21H3.6C3.26863 21 3 20.7314 3 20.4V15.6C3 15.2686 3.26863 15 3.6 15H6.4C6.73137 15 7 15.2686 7 15.6V21Z" }],
    [
      "path",
      { d: "M19 18C20.1046 18 21 17.1046 21 16C21 14.8954 20.1046 14 19 14C17.8954 14 17 14.8954 17 16C17 17.1046 17.8954 18 19 18Z" },
      { r: "pulse", d: 0.3, a: 0.12, o: [19, 16] },
    ],
    ["path", { d: "M19 7.5V14" }, { r: "grow", o: [19, 14] }],
    ["path", { d: "M19 12H21" }],
    ["path", { d: "M19 9H21" }],
  ],
});
