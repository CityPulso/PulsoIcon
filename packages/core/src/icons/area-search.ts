import { icon } from "../icon.js";

// Adapted from Iconoir "area-search" (MIT, Copyright (c) 2021 Luca Burgio).
export const AreaSearch = icon("AreaSearch", "area-search", {
  nodes: [
    [
      "path",
      {
        d: "M20.1241 20.1185C20.6654 19.5758 21 18.827 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21C18.8299 21 19.581 20.663 20.1241 20.1185ZM20.1241 20.1185L22 22",
      },
      { r: "tilt", o: [18, 18] },
    ],
    ["path", { d: "M7 2H4V5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M4 11V13" }],
    ["path", { d: "M11 2H13" }],
    ["path", { d: "M11 22H13" }],
    ["path", { d: "M20 11V13" }],
    ["path", { d: "M17 2H20V5" }, { r: "draw", d: 0.18 }],
    ["path", { d: "M7 22H4V19" }, { r: "draw", d: 0.26 }],
  ],
});
