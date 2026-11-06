import { icon } from "../icon.js";

export const Arc3d = icon("Arc3d", "arc-3d", {
  nodes: [
    ["path", { d: "M4 16a8 8 0 0 1 16 0" }, { r: "redraw", o: [12, 12] }],
    ["circle", { cx: "4", cy: "18", r: "2" }, { r: "pop", o: [4, 18] }],
    ["circle", { cx: "20", cy: "18", r: "2" }, { r: "pop", d: 0.15, o: [20, 18] }],
    ["path", { d: "M12 16h.01" }, { r: "pop", d: 0.3, o: [12, 16] }],
  ],
});
