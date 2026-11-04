import { createIcon } from "../runtime/createIcon.js";

export const BadgeCent = createIcon("BadgeCent", "badge-cent", {
  nodes: [
    [
      "path",
      { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" },
      { r: "spin", a: 90, o: [11.992, 12.004] },
    ],
    ["path", { d: "M12 7v10" }, { r: "stamp", d: 0.2, o: [11.668, 12] }],
    ["path", { d: "M15.4 10a4 4 0 1 0 0 4" }, { r: "stamp", d: 0.2, o: [11.668, 12] }],
  ],
});
