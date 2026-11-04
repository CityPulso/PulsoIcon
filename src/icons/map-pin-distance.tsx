import { createIcon } from "../runtime/createIcon.js";

export const MapPinDistance = createIcon("MapPinDistance", "map-pin-distance", {
  nodes: [
    ["path", { d: "M9 8c0 2.5-3 5.5-3 5.5S3 10.5 3 8a3 3 0 0 1 6 0z" }, { r: "bounce", y: -1, a: 1.5, o: [6, 9] }],
    ["path", { d: "M6 8h.01" }, { r: "bounce", y: -1, a: 1.5, o: [6, 9] }],
    ["path", { d: "M21 8c0 2.5-3 5.5-3 5.5S15 10.5 15 8a3 3 0 0 1 6 0z" }, { r: "bounce", d: 0.12, y: -1, a: 1.5, o: [18, 9] }],
    ["path", { d: "M18 8h.01" }, { r: "bounce", d: 0.12, y: -1, a: 1.5, o: [18, 9] }],
    ["path", { d: "M3 19h18" }, { r: "drawOut", d: 0.1, o: [12, 19] }],
    ["path", { d: "m6 16-3 3 3 3" }, { r: "slide", d: 0.3, x: -1, a: 1, o: [4.5, 19] }],
    ["path", { d: "m18 16 3 3-3 3" }, { r: "slide", d: 0.3, x: 1, a: 1, o: [19.5, 19] }],
  ],
});
