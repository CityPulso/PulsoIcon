import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "network-left" (MIT, Copyright (c) 2021 Luca Burgio).
export const NetworkLeft = createIcon("NetworkLeft", "network-left", {
  nodes: [
    ["rect", { x: "2", y: "21", width: "7", height: "5", rx: "0.6", transform: "rotate(-90 2 21)" }, { r: "pop", d: 0.15, a: 0.15, o: [4.5, 17.5] }],
    ["rect", { x: "17", y: "15.5", width: "7", height: "5", rx: "0.6", transform: "rotate(-90 17 15.5)" }, { r: "pulse", o: [19.5, 12] }],
    ["rect", { x: "2", y: "10", width: "7", height: "5", rx: "0.6", transform: "rotate(-90 2 10)" }, { r: "pop", d: 0.2, a: 0.15, o: [4.5, 6.5] }],
    ["path", { d: "M7 17.5H10.5C11.6046 17.5 12.5 16.6046 12.5 15.5V8.5C12.5 7.39543 11.6046 6.5 10.5 6.5H7" }],
    ["path", { d: "M12.5 12H17" }, { r: "draw" }],
  ],
});
