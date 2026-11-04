import { createIcon } from "../runtime/createIcon.js";

export const Pipe3d = createIcon("Pipe3d", "pipe-3d", {
  nodes: [
    ["path", { d: "M4 4h7a10 10 0 0 1 10 10v5" }, { r: "draw", o: [12, 12] }],
    ["path", { d: "M4 10h7a4 4 0 0 1 4 4v5" }, { r: "draw", o: [12, 12] }],
    ["ellipse", { cx: "4", cy: "7", rx: "1.5", ry: "3" }, { r: "pop", d: 0.3, o: [4, 7] }],
    ["ellipse", { cx: "18", cy: "19", rx: "3", ry: "1.5" }, { r: "pop", d: 0.4, o: [18, 19] }],
  ],
});
