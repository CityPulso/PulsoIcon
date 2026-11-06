import { icon } from "../icon.js";

// Adapted from Iconoir "network-reverse" (MIT, Copyright (c) 2021 Luca Burgio).
export const NetworkReverse = icon("NetworkReverse", "network-reverse", {
  nodes: [
    ["rect", { width: "7", height: "5", rx: "0.6", transform: "matrix(1 0 0 -1 3 22)" }, { r: "pop", d: 0.15, a: 0.15, o: [6.5, 19.5] }],
    ["rect", { width: "7", height: "5", rx: "0.6", transform: "matrix(1 0 0 -1 8.5 7)" }, { r: "pulse", o: [12, 4.5] }],
    ["rect", { width: "7", height: "5", rx: "0.6", transform: "matrix(1 0 0 -1 14 22)" }, { r: "pop", d: 0.2, a: 0.15, o: [17.5, 19.5] }],
    ["path", { d: "M6.5 17V13.5C6.5 12.3954 7.39543 11.5 8.5 11.5H15.5C16.6046 11.5 17.5 12.3954 17.5 13.5V17" }],
    ["path", { d: "M12 11.5V7" }, { r: "draw" }],
  ],
});
