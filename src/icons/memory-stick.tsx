import { createIcon } from "../runtime/createIcon.js";

export const MemoryStick = createIcon("MemoryStick", "memory-stick", {
  nodes: [
    ["path", { d: "M12 12v-2" }, { r: "flicker", d: 0.09, o: [12, 14] }],
    ["path", { d: "M12 18v-2" }, { r: "flicker", d: 0.21, o: [12, 14] }],
    ["path", { d: "M16 12v-2" }, { r: "flicker", d: 0.13, o: [12, 14] }],
    ["path", { d: "M16 18v-2" }, { r: "flicker", d: 0.25, o: [12, 14] }],
    ["path", { d: "M2 11h1.5" }, { r: "fade", o: [12, 14.5] }],
    ["path", { d: "M20 18v-2" }, { r: "fade", o: [12, 14.5] }],
    ["path", { d: "M20.5 11H22" }, { r: "fade", o: [12, 14.5] }],
    ["path", { d: "M4 18v-2" }, { r: "fade", o: [12, 14.5] }],
    ["path", { d: "M8 12v-2" }, { r: "flicker", d: 0.05, o: [12, 14] }],
    ["path", { d: "M8 18v-2" }, { r: "flicker", d: 0.17, o: [12, 14] }],
    ["rect", { x: "2", y: "6", width: "20", height: "10", rx: "2" }, { r: "press", a: 0.04, o: [12, 11] }],
  ],
});
