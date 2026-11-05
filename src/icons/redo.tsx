import { createIcon } from "../runtime/createIcon.js";

// Solid from Phosphor Icons "arrow-arc-right" fill (MIT, Copyright (c) 2023 Phosphor Icons).
export const Redo = createIcon("Redo", "redo", {
  nodes: [
    ["path", { d: "M21 7v6h-6" }, { r: "spin", a: 40, o: [12, 12] }],
    ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }, { r: "spin", a: 40, o: [12, 12] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M22.5 8.25v6a0.75 0.75 0 0 1-0.75 0.75H15.75a0.75 0.75 0 0 1-0.531-1.281l2.455-2.454A8.25 8.25 0 0 0 3.75 17.25a0.75 0.75 0 0 1-1.5 0 9.75 9.75 0 0 1 16.487-7.048l2.482-2.482A0.75 0.75 0 0 1 22.5 8.25Z",
        stroke: "none",
      },
      { r: "spin", a: 40, o: [12, 12] },
    ],
  ],
});
