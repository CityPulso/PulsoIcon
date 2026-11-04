import { createIcon } from "../runtime/createIcon.js";

export const BadgeJapaneseYen = createIcon("BadgeJapaneseYen", "badge-japanese-yen", {
  nodes: [
    [
      "path",
      { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" },
      { r: "spin", a: 90, o: [11.992, 12.004] },
    ],
    ["path", { d: "m9 8 3 3v7" }, { r: "draw", d: 0.15, o: [12, 13] }],
    ["path", { d: "m12 11 3-3" }, { r: "draw", d: 0.15, o: [12, 13] }],
    ["path", { d: "M9 12h6" }, { r: "growX", d: 0.3, o: [12, 12] }],
    ["path", { d: "M9 16h6" }, { r: "growX", d: 0.38, o: [12, 16] }],
  ],
});
