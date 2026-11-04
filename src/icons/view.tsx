import { createIcon } from "../runtime/createIcon.js";

export const View = createIcon("View", "view", {
  nodes: [
    ["path", { d: "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" }, { r: "slide", y: 1, a: 1, o: [12, 19] }],
    ["path", { d: "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" }, { r: "slide", y: -1, a: 1, o: [12, 5] }],
    ["circle", { cx: "12", cy: "12", r: "1" }, { r: "pop", d: 0.15, o: [12, 12] }],
    ["path", { d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" }, { r: "blink", d: 0.05, o: [12, 12] }],
  ],
});
