import { icon } from "../icon.js";

export const MapPinClock = icon("MapPinClock", "map-pin-clock", {
  nodes: [
    ["path", { d: "M19.9 11.3A8 8 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0" }, { r: "bounce", y: -1, a: 2, o: [12, 12] }],
    ["circle", { cx: "12", cy: "10", r: "3" }, { r: "bounce", y: -1, a: 2, o: [12, 12] }],
    ["circle", { cx: "17.5", cy: "17.5", r: "4.5" }, { r: "pulse", d: 0.1, a: 0.06, o: [17.5, 17.5] }],
    ["path", { d: "M17.5 15.5v2l1.5 1" }, { r: "spin", d: 0.1, a: 360, o: [17.5, 17.5] }],
  ],
});
