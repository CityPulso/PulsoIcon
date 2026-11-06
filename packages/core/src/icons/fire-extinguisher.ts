import { icon } from "../icon.js";

export const FireExtinguisher = icon("FireExtinguisher", "fire-extinguisher", {
  nodes: [
    ["path", { d: "M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5" }, { r: "sway", d: 0.1, a: 12, o: [11, 2] }],
    ["path", { d: "M9 18h8" }, { r: "fade", d: 0.15, o: [13, 18] }],
    ["path", { d: "M18 3h-3" }, { r: "fade", d: 0.1, o: [16.5, 3] }],
    ["path", { d: "M11 3a6 6 0 0 0-6 6v11" }, { r: "shake", a: 1, o: [11, 12.5] }],
    ["path", { d: "M5 13h4" }, { r: "shake", a: 1, o: [11, 12.5] }],
    ["path", { d: "M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z" }, { r: "shake", a: 1, o: [11, 12.5] }],
  ],
});
