import { createIcon } from "../runtime/createIcon.js";

export const Mars = createIcon("Mars", "mars", {
  nodes: [
    ["path", { d: "M16 3h5v5" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [17.625, 6.375] }],
    ["path", { d: "m21 3-6.75 6.75" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [17.625, 6.375] }],
    ["circle", { cx: "10", cy: "14", r: "6" }, { r: "press", a: 0.06, o: [10, 14] }],
  ],
});
