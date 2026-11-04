import { createIcon } from "../runtime/createIcon.js";

export const ScreenShare = createIcon("ScreenShare", "screen-share", {
  nodes: [
    ["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8 21h8" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 17v4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m17 8 5-5" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 1.5, o: [19.5, 5.5] }],
    ["path", { d: "M17 3h5v5" }, { r: "slide", d: 0.1, x: 1, y: -1, a: 1.5, o: [19.5, 5.5] }],
  ],
});
