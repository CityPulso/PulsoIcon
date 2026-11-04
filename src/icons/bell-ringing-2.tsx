import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "bell-ringing-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BellRinging2 = createIcon("BellRinging2", "bell-ringing-2", {
  nodes: [
    [
      "path",
      {
        d: "M19.364 4.636a2 2 0 0 1 0 2.828a7 7 0 0 1 -1.414 7.072l-2.122 2.12a4 4 0 0 0 -.707 3.536l-11.313 -11.312a4 4 0 0 0 3.535 -.707l2.121 -2.123a7 7 0 0 1 7.072 -1.414a2 2 0 0 1 2.828 0",
      },
      { r: "ring", o: [18.5, 5.5] },
    ],
    ["path", { d: "M7.343 12.414l-.707 .707a3 3 0 0 0 4.243 4.243l.707 -.707" }, { r: "ring", d: 0.05, o: [18.5, 5.5] }],
  ],
});
