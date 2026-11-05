import { createIcon } from "../runtime/createIcon.js";

// Solid from Tabler Icons "headphones" filled (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const HeadphoneOff = createIcon("HeadphoneOff", "headphone-off", {
  nodes: [
    ["path", { d: "M21 14h-1.343" }, { r: "pulse", a: 0.05, o: [12, 12] }],
    ["path", { d: "M9.128 3.47A9 9 0 0 1 21 12v3.343" }, { r: "pulse", a: 0.05, o: [12, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }],
    ["path", { d: "M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3" }, { r: "pulse", a: 0.05, o: [12, 12] }],
    ["path", { d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364" }, { r: "pulse", a: 0.05, o: [12, 12] }],
  ],
  solid: [
    [
      "path",
      {
        d: "M21 18a3 3 0 0 1 -2.824 2.995l-.176 .005h-1a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-3a3 3 0 0 1 2.824 -2.995l.176 -.005h1c.351 0 .688 .06 1 .171v-.171a7 7 0 0 0 -13.996 -.24l-.004 .24v.17c.25 -.088 .516 -.144 .791 -.163l.209 -.007h1a3 3 0 0 1 2.995 2.824l.005 .176v3a3 3 0 0 1 -2.824 2.995l-.176 .005h-1a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-6a9 9 0 0 1 17.996 -.265l.004 .265v6z",
        stroke: "none",
      },
      { r: "pulse", a: 0.05, o: [12, 12] },
    ],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
