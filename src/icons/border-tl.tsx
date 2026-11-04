import { createIcon } from "../runtime/createIcon.js";

export const BorderTl = createIcon("BorderTl", "border-tl", {
  nodes: [
    [
      "path",
      { d: "M12 7.5h.01M21 7.5h.01M7.5 12h.01M12 12h.01M16.5 12h.01M21 12h.01M12 16.5h.01M21 16.5h.01M7.5 21h.01M12 21h.01M16.5 21h.01M21 21h.01" },
      { r: "fade", d: 0.1, o: [12, 12] },
    ],
    ["path", { d: "M3 21V3H21" }, { r: "draw", o: [3, 3] }],
  ],
});
