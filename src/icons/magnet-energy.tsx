import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "magnet-energy" (MIT, Copyright (c) 2021 Luca Burgio).
export const MagnetEnergy = createIcon("MagnetEnergy", "magnet-energy", {
  nodes: [
    ["path", { d: "M5 9V15.7407C5 19.1976 8.13401 22 12 22C15.866 22 19 19.1976 19 15.7407V9" }, { r: "shake", d: 0.1, a: 1, o: [12, 15] }],
    ["path", { d: "M5 9H8" }],
    ["path", { d: "M16 9H19" }],
    ["path", { d: "M14.0741 11.5V15.0606C14.0741 16.1317 13.1455 17 12 17C10.8545 17 9.9259 16.1317 9.9259 15.0606V11.5" }],
    ["path", { d: "M10 13L5 13" }],
    ["path", { d: "M19 13L14 13" }],
    ["path", { d: "M11.6667 2L10 5H14L12.3333 8" }, { r: "flicker" }],
  ],
});
