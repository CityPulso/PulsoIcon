import { createIcon } from "../runtime/createIcon.js";

// Adapted from Hugeicons "hands-clapping" (MIT, Copyright (c) 2025 Hugeicons), re-stroked for this set.
export const Clap = createIcon("Clap", "clap", {
  nodes: [
    ["path", { d: "M16 20a6 6 0 0 0 6-6V7.5a1.5 1.5 0 0 0-2.9-.5" }, { r: "tilt", d: 0.05, a: -8, o: [20, 20] }],
    ["path", { d: "m14 5.5-1-1a1.4 1.4 0 0 0-2.4 1" }, { r: "tilt", d: 0.05, a: -8, o: [20, 20] }],
    [
      "path",
      {
        d: "M14 13V9.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-.7a8 8 0 0 1-5.66-2.34l-2.23-2.25a1.4 1.4 0 0 1 2-2L6 17l-3.6-3.6a1.4 1.4 0 0 1 2-2L8 15l-4.6-4.6a1.4 1.4 0 0 1 2-2L10 13 6.4 9.4a1.4 1.4 0 0 1 2-2Z",
      },
      { r: "tilt", a: 8, o: [10, 22] },
    ],
    ["path", { d: "M7 2v1.5M3 5h1.5" }, { r: "pop", d: 0.2, o: [5, 3.5] }],
  ],
});
