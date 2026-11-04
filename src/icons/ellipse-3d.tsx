import { createIcon } from "../runtime/createIcon.js";

export const Ellipse3d = createIcon("Ellipse3d", "ellipse-3d", {
  nodes: [
    ["path", { d: "M4.206 16.5A9 4.5 -30 0 1 19.794 7.5A9 4.5 -30 0 1 4.206 16.5" }, { r: "redraw", o: [12, 12] }],
    ["path", { d: "M12 12h.01" }, { r: "pop", d: 0.3, o: [12, 12] }],
  ],
});
