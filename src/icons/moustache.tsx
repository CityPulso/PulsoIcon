import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "moustache" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Moustache = createIcon("Moustache", "moustache", {
  nodes: [
    [
      "path",
      { d: "M15 9a3 3 0 0 1 2.599 1.5c.933 1.333 2.133 1.556 3.126 1.556l.291 0l.77 -.044l.213 0c-.963 1.926 -3.163 2.925 -6.6 3l-.4 0l-.165 0a3 3 0 0 1 .165 -6l.001 -.012" },
      { r: "turn", a: -10, o: [15, 12] },
    ],
    [
      "path",
      { d: "M9 9a3 3 0 0 0 -2.599 1.5c-.933 1.333 -2.133 1.556 -3.126 1.556l-.291 0l-.77 -.044l-.213 0c.963 1.926 3.163 2.925 6.6 3l.4 0l.165 0a3 3 0 0 0 -.165 -6l-.001 -.012" },
      { r: "turn", a: 10, o: [9, 12] },
    ],
  ],
});
