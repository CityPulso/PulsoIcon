import { icon } from "../icon.js";

// Adapted from Tabler Icons "scale-outline-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const ScaleOutlineOff = icon("ScaleOutlineOff", "scale-outline-off", {
  nodes: [
    ["path", { d: "M7 3h10a4 4 0 0 1 4 4v10m-1.173 2.83a3.987 3.987 0 0 1 -2.827 1.17h-10a4 4 0 0 1 -4 -4v-10c0 -1.104 .447 -2.103 1.17 -2.827" }, { r: "press", o: [12, 12] }],
    [
      "path",
      {
        d: "M11.062 7.062c.31 -.041 .622 -.062 .938 -.062c1.956 0 3.724 .802 5 2.095a142.85 142.85 0 0 0 -2 1.905m-3.723 .288a3 3 0 0 0 -1.315 .71l-2.956 -2.903a6.977 6.977 0 0 1 1.142 -.942",
      },
      { r: "turn", a: 20, o: [12, 10] },
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }],
  ],
  solid: [
    ["path", { d: "M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-10" }, { r: "press", o: [12, 12] }],
    [
      "path",
      { d: "M12 7c1.956 0 3.724 .802 5 2.095l-2.956 2.904a3 3 0 0 0 -2.038 -.799a3 3 0 0 0 -2.038 .798l-2.956 -2.903a6.979 6.979 0 0 1 5 -2.095" },
      { r: "turn", a: 20, o: [12, 10] },
      "cut",
    ],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.2 }, "line"],
  ],
});
