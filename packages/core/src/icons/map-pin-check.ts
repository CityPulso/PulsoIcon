import { icon } from "../icon.js";

export const MapPinCheck = icon("MapPinCheck", "map-pin-check", {
  nodes: [
    [
      "path",
      { d: "M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728" },
      { r: "bounce", y: -1, a: 2, o: [12, 12] },
    ],
    ["circle", { cx: "12", cy: "10", r: "3" }, { r: "bounce", y: -1, a: 2, o: [12, 12] }],
    ["path", { d: "m16 18 2 2 4-4" }, { r: "draw", d: 0.15, o: [19, 18] }],
  ],
});
