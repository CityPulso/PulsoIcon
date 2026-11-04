import { createIcon } from "../runtime/createIcon.js";

export const PoliceBadge = createIcon("PoliceBadge", "police-badge", {
  nodes: [
    [
      "path",
      { d: "M12 2.5c-1.6 1.4-4 2-6.5 1.5L4 6.5c1 2 1 4.5 0 6.5 1 4 4 7 8 8.5 4-1.5 7-4.5 8-8.5-1-2-1-4.5 0-6.5L18.5 4C16 4.5 13.6 3.9 12 2.5z" },
      { r: "press", a: 0.05, o: [12, 12] },
    ],
    ["polygon", { points: "12 9 12.82 11.37 15.33 11.42 13.33 12.93 14.06 15.33 12 13.9 9.94 15.33 10.67 12.93 8.67 11.42 11.18 11.37" }, { r: "twinkle", d: 0.1, o: [12, 12.5] }],
  ],
});
