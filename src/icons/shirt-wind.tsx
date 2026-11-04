import { createIcon } from "../runtime/createIcon.js";

export const ShirtWind = createIcon("ShirtWind", "shirt-wind", {
  nodes: [
    [
      "path",
      {
        d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",
      },
      { r: "swing", a: 4, o: [12, 2] },
    ],
    ["path", { d: "M9 13.5h5a1.5 1.5 0 1 0-1.5-1.5" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M9 17h5a1.5 1.5 0 1 1-1.5 1.5" }, { r: "draw", d: 0.2, o: [12, 18] }],
  ],
});
