import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "mobile-dev-mode" (MIT, Copyright (c) 2021 Luca Burgio).
export const MobileDevMode = createIcon("MobileDevMode", "mobile-dev-mode", {
  nodes: [
    ["path", { d: "M12 19.01L12.01 18.9989" }, { r: "pop", d: 0.2, o: [12, 19] }],
    ["path", { d: "M18 18V21.4C18 21.7314 17.7314 22 17.4 22H6.6C6.26863 22 6 21.7314 6 21.4V18" }],
    ["path", { d: "M18 6V2.6C18 2.26863 17.7314 2 17.4 2H6.6C6.26863 2 6 2.26863 6 2.6V6" }],
    ["path", { d: "M15.5 8.5L19 12L15.5 15.5" }, { r: "slide", x: 1, y: 0, a: 1.5 }],
    ["path", { d: "M8.5 8.5L5 12L8.5 15.5" }, { r: "slide", x: -1, y: 0, a: 1.5 }],
  ],
});
