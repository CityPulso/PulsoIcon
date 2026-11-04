import { createIcon } from "../runtime/createIcon.js";

export const BadgeSwissFranc = createIcon("BadgeSwissFranc", "badge-swiss-franc", {
  nodes: [
    [
      "path",
      { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" },
      { r: "spin", a: 90, o: [11.992, 12.004] },
    ],
    ["path", { d: "M11 17V8h4" }, { r: "draw", d: 0.15, o: [13, 12.5] }],
    ["path", { d: "M11 12h3" }, { r: "growX", d: 0.3, o: [12.5, 12] }],
    ["path", { d: "M9 16h4" }, { r: "growX", d: 0.38, o: [11, 16] }],
  ],
});
