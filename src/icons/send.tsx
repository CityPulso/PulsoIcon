import { createIcon } from "../runtime/createIcon.js";

// Solid from Tabler Icons "send" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const Send = createIcon("Send", "send", {
  nodes: [
    [
      "path",
      { d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" },
      { r: "shoot", x: 1, y: -1, a: 5, o: [12.001, 11.999] },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939" }, { r: "shoot", x: 1, y: -1, a: 5, o: [12.001, 11.999] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M21.864 3.549l-6.454 17.868a1.55 1.55 0 0 1 -1.41 .903a1.54 1.54 0 0 1 -1.394 -.874l-2.88 -5.759zm-1.414 -1.414l-12.139 12.138l-5.728 -2.864a1.55 1.55 0 0 1 -.903 -1.409c0 -.606 .353 -1.157 .981 -1.44z",
        stroke: "none",
      },
      { r: "shoot", x: 1, y: -1, a: 5, o: [12.001, 11.999] },
    ],
  ],
});
