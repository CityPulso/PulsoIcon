import { createIcon } from "../runtime/createIcon.js";

export const MapPinPlus = createIcon("MapPinPlus", "map-pin-plus", {
  nodes: [
    [
      "path",
      { d: "M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738" },
      { r: "bounce", y: -1, a: 2, o: [12, 12] },
    ],
    ["circle", { cx: "12", cy: "10", r: "3" }, { r: "bounce", y: -1, a: 2, o: [12, 12] }],
    ["path", { d: "M16 18h6" }, { r: "spin", d: 0.15, a: 90, o: [19, 18] }],
    ["path", { d: "M19 15v6" }, { r: "spin", d: 0.15, a: 90, o: [19, 18] }],
  ],
});
