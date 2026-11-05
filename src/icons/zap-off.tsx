import { createIcon } from "../runtime/createIcon.js";

// Solid from Phosphor Icons "lightning" fill (MIT, Copyright (c) 2023 Phosphor Icons).
export const ZapOff = createIcon("ZapOff", "zap-off", {
  nodes: [
    ["path", { d: "M10.768 5.111 13.44 2.44a1.5 1.5 0 012.474 1.561l-1.633 4.625" }, { r: "flicker", o: [12, 12] }],
    ["path", { d: "m18.889 13.232.672-.672A1.5 1.5 0 0018.5 10h-2.844" }, { r: "flicker", o: [12, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "m7.94 7.94-3.5 3.499A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l5.5-5.5" }, { r: "flicker", o: [12, 12] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M20.048 11.762l-10.5 11.25a0.75 0.75 0 0 1-1.283-0.656l1.374-6.875L4.237 13.452a0.75 0.75 0 0 1-0.281-1.219l10.5-11.25a0.75 0.75 0 0 1 1.283 0.656L14.361 8.522l5.403 2.026a0.75 0.75 0 0 1 0.281 1.214Z",
        stroke: "none",
      },
      { r: "flicker", o: [12, 12] },
    ],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }, "line"],
  ],
});
