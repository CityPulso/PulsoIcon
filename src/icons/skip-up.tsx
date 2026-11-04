import { createIcon } from "../runtime/createIcon.js";

export const SkipUp = createIcon("SkipUp", "skip-up", {
  nodes: [
    ["path", { d: "M4 3h16" }, { r: "jelly", d: 0.1, o: [12, 3] }],
    ["path", { d: "M4.285 17.971A2 2 0 0 0 6 21h12a2 2 0 0 0 1.715-3.029l-5.998-9.997a2 2 0 0 0-3.432-.003z" }, { r: "slide", y: -1, a: 2, o: [12, 14] }],
  ],
});
