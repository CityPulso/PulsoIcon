import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "gas-station-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const GasStationOff = createIcon("GasStationOff", "gas-station-off", {
  nodes: [
    ["path", { d: "M15 11a2 2 0 0 1 2 2m3 3v-7l-3 -3" }, { r: "swing", d: 0, a: 8, o: [17, 6] }],
    ["path", { d: "M4 20v-14c0 -.548 .22 -1.044 .577 -1.405m3.423 -.595h4a2 2 0 0 1 2 2v4m0 4v6" }, { r: "pulse", d: 0, a: 0.04, o: [9, 12] }],
    ["path", { d: "M3 20h12" }, { r: "pulse", d: 0, a: 0.04, o: [9, 12] }],
    ["path", { d: "M18 7v1a1 1 0 0 0 1 1h1" }, { r: "swing", d: 0, a: 8, o: [17, 6] }],
    ["path", { d: "M4 11h7" }, { r: "pulse", d: 0, a: 0.04, o: [9, 12] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }],
  ],
  solid: [
    ["path", { d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5", fill: "none" }, { r: "swing", d: 0, a: 8, o: [17, 6] }],
    ["path", { d: "M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16" }, { r: "pulse", d: 0, a: 0.04, o: [9, 12] }],
    ["path", { d: "M2 21h13", fill: "none" }, { r: "pulse", d: 0, a: 0.04, o: [9, 12] }],
    ["path", { d: "M3 9h11" }, { r: "pulse", d: 0, a: 0.04, o: [9, 12] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15 }, "line"],
  ],
});
