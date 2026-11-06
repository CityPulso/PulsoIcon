import { icon } from "../icon.js";

// Adapted from Iconoir "tunnel" (MIT, Copyright (c) 2021 Luca Burgio).
export const Tunnel = icon("Tunnel", "tunnel", {
  nodes: [
    ["path", { d: "M21 20L3 14" }, { r: "draw" }],
    ["path", { d: "M16 10V11" }, { r: "flicker", d: 0.1 }],
    ["path", { d: "M12 9V10" }, { r: "flicker", d: 0.2 }],
    ["path", { d: "M8 8V9" }, { r: "flicker", d: 0.3 }],
    [
      "path",
      { d: "M3 21H21V12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12V21Z" },
    ],
  ],
});
