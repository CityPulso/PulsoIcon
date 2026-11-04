import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "wash-press" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const WashPress = createIcon("WashPress", "wash-press", {
  nodes: [
    [
      "path",
      {
        d: "M3.486 7.965c.168 .02 .34 .033 .514 .035c.79 .009 1.539 -.178 2 -.5c.461 -.32 1.21 -.507 2 -.5c.79 -.007 1.539 .18 2 .5c.461 .322 1.21 .509 2 .5c.79 .009 1.539 -.178 2 -.5c.461 -.32 1.21 -.507 2 -.5c.79 -.007 1.539 .18 2 .5c.461 .322 1.21 .509 2 .5c.17 0 .339 -.014 .503 -.034",
      },
      { r: "slide", x: 1, y: 0, a: 1 },
    ],
    ["path", { d: "M3 5l1.721 10.329a2 2 0 0 0 1.973 1.671h10.612a2 2 0 0 0 1.973 -1.671l1.721 -10.329" }],
    ["path", { d: "M5 20h14" }, { r: "growX", d: 0.1, o: [12, 20] }],
  ],
});
