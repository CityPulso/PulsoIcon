import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "pencil-circle" (MIT, Copyright (c) 2023 Phosphor Icons).

export const PencilCircle = createIcon("PencilCircle", "pencil-circle", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M8 21.2V13l4-8 4 8v8.2" }, { r: "tilt", d: 0.05, a: 8, o: [12, 21] }],
    ["path", { d: "M8 13a2 2 0 0 0 4 0 2 2 0 0 0 4 0" }, { r: "tilt", d: 0.05, a: 8, o: [12, 21] }],
    ["path", { d: "M12 15v7" }, { r: "tilt", d: 0.05, a: 8, o: [12, 21] }],
    ["path", { d: "M10 9h4" }, { r: "tilt", d: 0.05, a: 8, o: [12, 21] }],
  ],
});
