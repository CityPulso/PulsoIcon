import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "alert-hexagon-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const AlertHexagonOff = createIcon("AlertHexagonOff", "alert-hexagon-off", {
  nodes: [
    [
      "path",
      {
        d: "M18.36 18.387l-5.268 3.333a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l1.317 -.777m2.535 -1.493l2.898 -1.709a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .414 -.116 .812 -.326 1.155",
      },
    ],
    ["path", { d: "M12 7v1" }, { r: "draw" }],
    ["path", { d: "M12 8v.01" }, { r: "draw" }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M12 16h.01" }, { r: "pop", d: 0.1, o: [12, 16] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033",
      },
    ],
    ["path", { d: "M12 8v4" }, { r: "draw" }, "line"],
    ["path", { d: "M12 16h.01" }, { r: "pop", d: 0.1, o: [12, 16] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
