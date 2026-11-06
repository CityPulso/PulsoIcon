import { icon } from "../icon.js";

// Adapted from Iconoir "one-point-circle" (MIT, Copyright (c) 2021 Luca Burgio).
export const OnePointCircle = icon("OnePointCircle", "one-point-circle", {
  nodes: [
    ["path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" }],
    ["path", { d: "M12 12h.01" }, { r: "pop", a: 0.6, o: [12, 12] }],
    ["path", { d: "M19 19L17.5 17.5" }, { r: "fade", d: 0.18 }],
    ["path", { d: "M15.5 15.5L14.5 14.5" }, { r: "fade", d: 0.1 }],
  ],
});
