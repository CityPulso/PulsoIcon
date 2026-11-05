import { createIcon } from "../runtime/createIcon.js";

// Solid from Phosphor Icons "arrow-up" fill (MIT, Copyright (c) 2023 Phosphor Icons).
export const ArrowUp = createIcon("ArrowUp", "arrow-up", {
  nodes: [
    ["path", { d: "m5 12 7-7 7 7" }, { r: "shoot", y: -1, a: 6, o: [12, 12] }],
    ["path", { d: "M12 19V5" }, { r: "shoot", y: -1, a: 6, o: [12, 12] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M19.443 10.787A0.75 0.75 0 0 1 18.75 11.25H12.75v9a0.75 0.75 0 0 1-1.5 0V11.25H5.25a0.75 0.75 0 0 1-0.531-1.281l6.75-6.75a0.75 0.75 0 0 1 1.061 0l6.75 6.75A0.75 0.75 0 0 1 19.443 10.787Z",
        stroke: "none",
      },
      { r: "shoot", y: -1, a: 6, o: [12, 12] },
    ],
  ],
});
