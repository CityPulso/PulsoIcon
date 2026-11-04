import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "flag-checkered" (MIT, Copyright (c) 2023 Phosphor Icons).
export const FlagCheckered = createIcon("FlagCheckered", "flag-checkered", {
  nodes: [
    [
      "path",
      { d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" },
      { r: "swing", a: 8, o: [4, 22] },
    ],
    ["path", { d: "M4 9.3A6 6 0 0 1 8 8c3 0 5 2 8 2a6 6 0 0 0 4-1.3" }, { r: "swing", a: 8, o: [4, 22] }],
    ["path", { d: "M9.5 2.2v12.1" }, { r: "swing", a: 8, o: [4, 22] }],
    ["path", { d: "M14.5 3.8v11.9" }, { r: "swing", a: 8, o: [4, 22] }],
  ],
});
