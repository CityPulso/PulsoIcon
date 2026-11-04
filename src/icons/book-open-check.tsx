import { createIcon } from "../runtime/createIcon.js";

export const BookOpenCheck = createIcon("BookOpenCheck", "book-open-check", {
  nodes: [
    ["path", { d: "M12 5v16" }, { r: "fold", o: [12, 12] }],
    ["path", { d: "m16 12 2 2 4-4" }, { r: "draw", d: 0.3, o: [19, 12] }],
    [
      "path",
      { d: "M22 6V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2h4.001A2 2 0 0022 17v-1.344" },
      { r: "fold", o: [12, 12] },
    ],
  ],
});
