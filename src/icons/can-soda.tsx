import { createIcon } from "../runtime/createIcon.js";

export const CanSoda = createIcon("CanSoda", "can-soda", {
  svg: { r: "shake", a: 1 },
  nodes: [
    ["path", { d: "m17 22 1.664-2.496a2 2 0 00.336-1.11V5.606a2 2 0 00-.336-1.11L17 2" }],
    ["path", { d: "M18 22H6" }],
    ["path", { d: "M18 2H6" }],
    ["path", { d: "M5 17h14" }, { r: "growX", d: 0.15, o: [12, 17] }],
    ["path", { d: "M5 7h14" }, { r: "growX", d: 0.21, o: [12, 7] }],
    ["path", { d: "m7 22-1.664-2.496A2 2 0 015 18.394V5.606a2 2 0 01.336-1.11L7 2" }],
  ],
});
