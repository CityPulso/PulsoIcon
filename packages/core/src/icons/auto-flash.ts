import { icon } from "../icon.js";

// Adapted from Iconoir "auto-flash" (MIT, Copyright (c) 2021 Luca Burgio).
export const AutoFlash = icon("AutoFlash", "auto-flash", {
  nodes: [
    ["path", { d: "M16 9.5L16.6923 8M22 9.5L21.3077 8M21.3077 8L19 3L16.6923 8M21.3077 8H16.6923" }, { r: "pop", d: 0.2, o: [19, 6] }],
    ["path", { d: "M13 10H10V3L2 14H8V21L14 12.75" }, { r: "flicker" }],
  ],
});
