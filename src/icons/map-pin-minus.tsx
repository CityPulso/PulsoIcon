import { createIcon } from "../runtime/createIcon.js";

export const MapPinMinus = createIcon("MapPinMinus", "map-pin-minus", {
  nodes: [
    [
      "path",
      { d: "M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738" },
      { r: "bounce", y: -1, a: 2, o: [12, 12] },
    ],
    ["circle", { cx: "12", cy: "10", r: "3" }, { r: "bounce", y: -1, a: 2, o: [12, 12] }],
    ["path", { d: "M16 18h6" }, { r: "growX", d: 0.15, o: [19, 18] }],
  ],
});
