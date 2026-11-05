import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "alert-square-rounded-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlertSquareRoundedOff = createIcon("AlertSquareRoundedOff", "alert-square-rounded-off", {
  nodes: [
    [
      "path",
      {
        d: "M19.201 19.199c-1.35 1.35 -3.6 1.801 -7.201 1.801c-7.2 0 -9 -1.8 -9 -9c0 -3.598 .45 -5.847 1.797 -7.197m2.626 -1.376c1.204 -.307 2.709 -.427 4.577 -.427c7.2 0 9 1.8 9 9c0 1.865 -.12 3.367 -.425 4.57",
      },
    ],
    ["path", { d: "M12 7v1" }, { r: "draw" }],
    ["path", { d: "M12 16h.01" }, { r: "pop", d: 0.1, o: [12, 16] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" }],
    ["path", { d: "M12 8v4" }, { r: "draw" }, "line"],
    ["path", { d: "M12 16h.01" }, { r: "pop", d: 0.1, o: [12, 16] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
