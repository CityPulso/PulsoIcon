import { icon } from "../icon.js";

// Adapted from Tabler Icons "cube-unfolded" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const CubeUnfolded = icon("CubeUnfolded", "cube-unfolded", {
  nodes: [
    ["path", { d: "M2 15h10v5h5v-5h5v-5h-10v-5h-5v5h-5l0 5" }, { r: "pulse", a: 0.05, o: [12, 12.5] }],
    ["path", { d: "M7 15v-5h5v5h5v-5" }, { r: "draw", d: 0.1 }],
  ],
});
