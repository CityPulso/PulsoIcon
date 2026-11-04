import { createIcon } from "../runtime/createIcon.js";

export const Scaling = createIcon("Scaling", "scaling", {
  nodes: [
    ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M14 15H9v-5" }, { r: "pop", d: 0.05, o: [11.5, 12.5] }],
    ["path", { d: "M16 3h5v5" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 1.5, o: [15, 9] }],
    ["path", { d: "M21 3 9 15" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 1.5, o: [15, 9] }],
  ],
});
