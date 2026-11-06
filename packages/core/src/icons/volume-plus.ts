import { icon } from "../icon.js";

export const VolumePlus = icon("VolumePlus", "volume-plus", {
  nodes: [
    [
      "path",
      {
        d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      },
      { r: "press", a: 0.06, o: [6, 12] },
    ],
    ["path", { d: "M16 12h6" }, { r: "spin", d: 0.1, a: 90, o: [19, 12] }],
    ["path", { d: "M19 9v6" }, { r: "spin", d: 0.1, a: 90, o: [19, 12] }],
  ],
});
