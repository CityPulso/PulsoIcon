import { icon } from "../icon.js";

export const JapaneseYen = icon("JapaneseYen", "japanese-yen", {
  nodes: [
    ["path", { d: "M12 12v8" }, { r: "grow", d: 0.15, o: [12, 12] }],
    ["path", { d: "m6 4 6 8 6-8" }, { r: "draw", o: [12, 8] }],
    ["path", { d: "M8 13h8" }, { r: "growX", d: 0.25, o: [12, 13] }],
    ["path", { d: "M8 17h8" }, { r: "growX", d: 0.31, o: [12, 17] }],
  ],
});
