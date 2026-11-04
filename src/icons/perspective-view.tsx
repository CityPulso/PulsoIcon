import { createIcon } from "../runtime/createIcon.js";

export const PerspectiveView = createIcon("PerspectiveView", "perspective-view", {
  nodes: [
    ["path", { d: "M7 4h10l5 16H2Z" }, { r: "press", a: 0.06, o: [12, 20] }],
    ["path", { d: "M12 4v16" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M4.5 12h15" }, { r: "growX", d: 0.2, o: [12, 12] }],
  ],
});
