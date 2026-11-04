import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "mac-dock" (MIT, Copyright (c) 2021 Luca Burgio).
export const MacDock = createIcon("MacDock", "mac-dock", {
  nodes: [
    ["path", { d: "M8 16.5h.01" }, { r: "bounce", x: 0, y: -1, a: 1.5, o: [8, 16.5] }],
    ["path", { d: "M12 16.5h.01" }, { r: "bounce", d: 0.1, x: 0, y: -1, a: 1.5, o: [12, 16.5] }],
    ["path", { d: "M16 16.5h.01" }, { r: "bounce", d: 0.2, x: 0, y: -1, a: 1.5, o: [16, 16.5] }],
    ["path", { d: "M21 21H3C2.44772 21 2 20.5523 2 20L2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21Z" }],
    ["path", { d: "M2 17.5L4 16.5" }],
    ["path", { d: "M22 17.5L20 16.5" }],
  ],
});
