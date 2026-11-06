import { icon } from "../icon.js";

// Adapted from Iconoir "network-right" (MIT, Copyright (c) 2021 Luca Burgio).
export const NetworkRight = icon("NetworkRight", "network-right", {
  nodes: [
    ["rect", { width: "7", height: "5", rx: "0.6", transform: "matrix(0 -1 -1 0 22 21)" }, { r: "pop", d: 0.15, a: 0.15, o: [19.5, 17.5] }],
    ["rect", { width: "7", height: "5", rx: "0.6", transform: "matrix(0 -1 -1 0 7 15.5)" }, { r: "pulse", o: [4.5, 12] }],
    ["rect", { width: "7", height: "5", rx: "0.6", transform: "matrix(0 -1 -1 0 22 10)" }, { r: "pop", d: 0.2, a: 0.15, o: [19.5, 6.5] }],
    ["path", { d: "M17 17.5H13.5C12.3954 17.5 11.5 16.6046 11.5 15.5V8.5C11.5 7.39543 12.3954 6.5 13.5 6.5H17" }],
    ["path", { d: "M11.5 12H7" }, { r: "draw" }],
  ],
});
