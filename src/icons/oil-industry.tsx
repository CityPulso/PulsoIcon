import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "oil-industry" (MIT, Copyright (c) 2021 Luca Burgio).
export const OilIndustry = createIcon("OilIndustry", "oil-industry", {
  nodes: [
    ["path", { d: "M18 10C18 9 17 8 15 8C14.6978 8 14.355 8 14.0002 8C12.3434 8 11 6.65685 11 5V2" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M9 10.8C9 9.03269 6 6 6 6C6 6 3 9.03269 3 10.8C3 12.5673 4.34315 14 6 14C7.65685 14 9 12.5673 9 10.8Z" }, { r: "drop", x: 0, y: -1, a: 3 }],
    ["path", { d: "M18 21H21V12H18V16.5M18 21V16.5M18 21H10.5V16.5L14.5 14L18 16.5" }],
    ["path", { d: "M21 10C21 4 17 4 17 4C17 4 21 4.5 21 2" }, { r: "float", d: 0.1 }],
  ],
});
