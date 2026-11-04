import { createIcon } from "../runtime/createIcon.js";

export const Layers = createIcon("Layers", "layers", {
  nodes: [
    ["path", { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" }, { r: "float", a: 2, o: [12.01, 7] }],
    ["path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" }, { r: "float", d: 0.08, a: 1, o: [12, 14.499] }],
    ["path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" }, { r: "press", d: 0.16, a: 0.04, o: [12, 19.499] }],
  ],
});
