import { createIcon } from "../runtime/createIcon.js";

export const Folders = createIcon("Folders", "folders", {
  nodes: [
    [
      "path",
      { d: "M20 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.2.6l.6.8a1.5 1.5 0 0 0 1.2.6z" },
      { r: "slide", x: 1, y: -1, a: 1.5, o: [14.5, 9.5] },
    ],
    ["path", { d: "M3 8.268a2 2 0 0 0-1 1.738V19a2 2 0 0 0 2 2h11a2 2 0 0 0 1.732-1" }, { r: "press", d: 0.1, a: 0.04, o: [9.366, 14.634] }],
  ],
});
