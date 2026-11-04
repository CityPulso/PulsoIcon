import { createIcon } from "../runtime/createIcon.js";

export const Quote = createIcon("Quote", "quote", {
  nodes: [
    [
      "path",
      { d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" },
      { r: "drop", d: 0.1, a: 3, o: [17.5, 12] },
    ],
    [
      "path",
      { d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" },
      { r: "drop", a: 3, o: [6.5, 12] },
    ],
  ],
});
