import { icon } from "../icon.js";

export const GobletCrack = icon("GobletCrack", "goblet-crack", {
  nodes: [
    ["path", { d: "M6 3h12l-.5 4.5a5.5 5.5 0 0 1-11 0z" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "M12.5 3 11 6l2 1.5-1.5 3" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M12 13v8" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "M8 21h8" }, { r: "growX", d: 0.1, o: [12, 21] }],
  ],
});
