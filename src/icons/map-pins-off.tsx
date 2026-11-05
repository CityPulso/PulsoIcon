import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "map-pins-off" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const MapPinsOff = createIcon("MapPinsOff", "map-pins-off", {
  nodes: [
    ["path", { d: "M4.712 4.72a4 4 0 0 0 .46 5.108l2.828 2.829l2.333 -2.334" }, { r: "bounce", y: -1, a: 1.2, o: [8, 8] }],
    ["path", { d: "M11.898 7.897a4 4 0 0 0 -4.796 -4.797" }, { r: "bounce", y: -1, a: 1.2, o: [8, 8] }],
    ["path", { d: "M12.715 12.717a4 4 0 0 0 .457 5.111l2.828 2.829l2.332 -2.333" }, { r: "bounce", d: 0.15, y: -1, a: 1.2, o: [16, 16] }],
    ["path", { d: "M19.9 15.888a4 4 0 0 0 -4.795 -4.788" }, { r: "bounce", d: 0.15, y: -1, a: 1.2, o: [16, 16] }],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829" }, { r: "bounce", y: -1, a: 1.2, o: [8, 8] }],
    ["path", { d: "M8 7l0 .01" }, { r: "bounce", y: -1, a: 1.2, o: [8, 8] }, "line"],
    ["path", { d: "M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829" }, { r: "bounce", d: 0.15, y: -1, a: 1.2, o: [16, 16] }],
    ["path", { d: "M16 15l0 .01" }, { r: "bounce", d: 0.15, y: -1, a: 1.2, o: [16, 16] }, "line"],
    ["path", { d: "M3 3l18 18" }, { r: "draw", d: 0.15, o: [12, 12] }, "line"],
  ],
});
