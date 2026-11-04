import { createIcon } from "../runtime/createIcon.js";

export const Magnet = createIcon("Magnet", "magnet", {
  nodes: [
    ["path", { d: "m12 15 4 4" }, { r: "flicker", d: 0.1, o: [10.5, 13.5] }],
    [
      "path",
      {
        d: "M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z",
      },
      { r: "shake", a: 1, o: [11.997, 12.002] },
    ],
    ["path", { d: "m5 8 4 4" }, { r: "flicker", d: 0.18, o: [10.5, 13.5] }],
  ],
});
