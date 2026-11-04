import { createIcon } from "../runtime/createIcon.js";

export const MapPinHouse = createIcon("MapPinHouse", "map-pin-house", {
  nodes: [
    ["path", { d: "M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" }, { r: "rise", d: 0.1, a: 2, o: [18, 18] }],
    ["path", { d: "M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" }, { r: "bounce", y: -1, a: 2, o: [10, 12] }],
    ["path", { d: "M18 22v-3" }, { r: "rise", d: 0.1, a: 2, o: [18, 18] }],
    ["circle", { cx: "10", cy: "10", r: "3" }, { r: "bounce", y: -1, a: 2, o: [10, 12] }],
  ],
});
