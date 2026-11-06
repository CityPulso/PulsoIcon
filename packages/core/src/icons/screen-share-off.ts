import { icon } from "../icon.js";

export const ScreenShareOff = icon("ScreenShareOff", "screen-share-off", {
  nodes: [
    ["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8 21h8" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 17v4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m22 3-5 5" }, { r: "draw", d: 0.1, o: [19.5, 5.5] }],
    ["path", { d: "m17 3 5 5" }, { r: "draw", d: 0.2, o: [19.5, 5.5] }],
  ],
});
