import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "send-2" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Send2 = createIcon("Send2", "send-2", {
  nodes: [
    [
      "path",
      {
        d: "M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124",
      },
      { r: "shoot", x: 1, a: 5, o: [12, 12] },
    ],
    ["path", { d: "M6.5 12h14.5" }, { r: "shoot", x: 1, a: 5, o: [12, 12] }],
  ],
});
