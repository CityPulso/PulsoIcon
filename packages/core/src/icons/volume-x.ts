import { icon } from "../icon.js";

export const VolumeX = icon("VolumeX", "volume-x", {
  nodes: [
    [
      "path",
      { d: "M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z" },
      { r: "press", a: 0.06, o: [6, 12] },
    ],
    ["path", { d: "m16.5 14.5 5-5" }, { r: "draw", d: 0.1, o: [19, 12] }],
    ["path", { d: "m16.5 9.5 5 5" }, { r: "draw", d: 0.2, o: [19, 12] }],
  ],
});
