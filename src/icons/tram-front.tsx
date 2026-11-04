import { createIcon } from "../runtime/createIcon.js";

export const TramFront = createIcon("TramFront", "tram-front", {
  nodes: [
    ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2" }, { r: "bounce", y: -1, a: 1, o: [12, 11] }],
    ["path", { d: "M4 11h16" }, { r: "bounce", y: -1, a: 1, o: [12, 11] }],
    ["path", { d: "M12 3v8" }, { r: "bounce", y: -1, a: 1, o: [12, 11] }],
    ["path", { d: "m8 19-2 3" }, { r: "fade", o: [12, 20.5] }],
    ["path", { d: "m18 22-2-3" }, { r: "fade", o: [12, 20.5] }],
    ["path", { d: "M8 15h.01" }, { r: "flicker", d: 0.1, o: [12.005, 15] }],
    ["path", { d: "M16 15h.01" }, { r: "flicker", d: 0.16, o: [12.005, 15] }],
  ],
});
