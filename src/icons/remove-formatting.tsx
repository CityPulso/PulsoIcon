import { createIcon } from "../runtime/createIcon.js";

export const RemoveFormatting = createIcon("RemoveFormatting", "remove-formatting", {
  nodes: [
    ["path", { d: "M4 7V4h16v3" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "M5 20h6" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "M13 4 8 20" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "m15 15 5 5" }, { r: "draw", d: 0.1, o: [17.5, 17.5] }],
    ["path", { d: "m20 15-5 5" }, { r: "draw", d: 0.2, o: [17.5, 17.5] }],
  ],
});
