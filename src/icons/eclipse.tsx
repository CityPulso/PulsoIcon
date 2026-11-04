import { createIcon } from "../runtime/createIcon.js";

export const Eclipse = createIcon("Eclipse", "eclipse", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 2a7 7 0 1 0 10 10" }, { r: "slide", x: -1, y: 1, a: 2, o: [15.964, 8.036] }],
  ],
});
