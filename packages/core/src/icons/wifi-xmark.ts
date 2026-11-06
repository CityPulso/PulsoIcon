import { icon } from "../icon.js";

// Adapted from Iconoir "wifi-xmark" (MIT, Copyright (c) 2021 Luca Burgio).
export const WifiXmark = icon("WifiXmark", "wifi-xmark", {
  nodes: [
    ["path", { d: "M12 18.51L12.01 18.4989" }, { r: "pop", o: [12, 18.5] }],
    ["path", { d: "M2 7C8 2.5 16 2.5 22 7" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M5 11C9 8 15 8 19 11" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M8.5 14.5C10.7504 13.1 13.2498 13.0996 15.5001 14.5" }, { r: "draw", d: 0.1 }],
    [
      "path",
      { d: "M17.1213 21.364L19.2426 19.2427M21.364 17.1214L19.2426 19.2427M19.2426 19.2427L17.1213 17.1214M19.2426 19.2427L21.364 21.364" },
      { r: "pop", d: 0.4, o: [19.25, 19.25] },
    ],
  ],
});
