import { createIcon } from "../runtime/createIcon.js";

export const MapPinUser = createIcon("MapPinUser", "map-pin-user", {
  nodes: [
    ["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }, { r: "bounce", y: -1, a: 2.5, o: [12, 12] }],
    ["circle", { cx: "12", cy: "8.5", r: "2.5" }, { r: "float", d: 0.1, a: 1, o: [12, 8.5] }],
    ["path", { d: "M8.5 15.5a3.5 3.5 0 0 1 7 0" }, { r: "rise", d: 0.15, a: 1, o: [12, 14] }],
  ],
});
