import { icon } from "../icon.js";

export const MapPinSearch = icon("MapPinSearch", "map-pin-search", {
  nodes: [
    [
      "path",
      { d: "M 12.248 21.969 a 1 1 0 0 1 -0.849 -0.17 C 9.539 20.193 4 14.993 4 10 a 8 8 0 0 1 16 0 C 20 10.42 19.961 10.841 19.888 11.262" },
      { r: "bounce", y: -1, a: 2, o: [12, 12] },
    ],
    ["path", { d: "m22 22-1.88-1.88" }, { r: "swing", d: 0.1, a: 15, o: [18, 18] }],
    ["circle", { cx: "12", cy: "10", r: "3" }, { r: "bounce", y: -1, a: 2, o: [12, 12] }],
    ["circle", { cx: "18", cy: "18", r: "3" }, { r: "swing", d: 0.1, a: 15, o: [18, 18] }],
  ],
});
