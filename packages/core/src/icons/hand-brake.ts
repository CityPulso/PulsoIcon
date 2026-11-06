import { icon } from "../icon.js";

// Adapted from Iconoir "hand-brake" (MIT, Copyright (c) 2021 Luca Burgio).
export const HandBrake = icon("HandBrake", "hand-brake", {
  nodes: [
    ["path", { d: "M12 16V14V12" }, { r: "grow", o: [12, 16] }],
    ["path", { d: "M12 9V8.5V8" }, { r: "pop", d: 0.35, o: [12, 8.5] }],
    ["circle", { cx: "12", cy: "12", r: "8" }],
    ["path", { d: "M3.9532 4.5C2.12105 6.46488 1 9.10152 1 12C1 14.8985 2.12105 17.5351 3.9532 19.5" }, { r: "flicker", d: 0.1 }],
    ["path", { d: "M20.0469 4.5C21.879 6.46488 23.0001 9.10152 23.0001 12C23.0001 14.8985 21.879 17.5351 20.0469 19.5" }, { r: "flicker", d: 0.1 }],
  ],
});
