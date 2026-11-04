import { createIcon } from "../runtime/createIcon.js";

export const MapPinX = createIcon("MapPinX", "map-pin-x", {
  nodes: [
    [
      "path",
      { d: "M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077" },
      { r: "shake", a: 1, o: [12, 12] },
    ],
    ["circle", { cx: "12", cy: "10", r: "3" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "m21.5 15.5-5 5" }, { r: "draw", d: 0.15, o: [19, 18] }],
    ["path", { d: "m21.5 20.5-5-5" }, { r: "draw", d: 0.25, o: [19, 18] }],
  ],
});
