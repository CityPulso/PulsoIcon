import { icon } from "../icon.js";

// Solid from Phosphor Icons "arrow-down" fill (MIT, Copyright (c) 2023 Phosphor Icons).
export const ArrowDown = icon("ArrowDown", "arrow-down", {
  nodes: [
    ["path", { d: "M12 5v14" }, { r: "shoot", y: 1, a: 6, o: [12, 12] }],
    ["path", { d: "m19 12-7 7-7-7" }, { r: "shoot", y: 1, a: 6, o: [12, 12] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M19.281 14.031l-6.75 6.75a0.75 0.75 0 0 1-1.061 0l-6.75-6.75A0.75 0.75 0 0 1 5.25 12.75h6V3.75a0.75 0.75 0 0 1 1.5 0v9h6a0.75 0.75 0 0 1 0.531 1.281Z",
        stroke: "none",
      },
      { r: "shoot", y: 1, a: 6, o: [12, 12] },
    ],
  ],
});
