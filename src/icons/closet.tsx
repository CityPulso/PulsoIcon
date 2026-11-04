import { createIcon } from "../runtime/createIcon.js";

export const Closet = createIcon("Closet", "closet", {
  nodes: [
    ["path", { d: "M12 3H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h6z" }, { r: "flip", o: [8, 11.5] }],
    ["path", { d: "M12 3h6a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-6z" }, { r: "flip", d: 0.08, o: [16, 11.5] }],
    ["path", { d: "M10 10v3" }, { r: "flip", o: [8, 11.5] }],
    ["path", { d: "M14 10v3" }, { r: "flip", d: 0.08, o: [16, 11.5] }],
    ["path", { d: "M6 20v2M18 20v2" }, { r: "fade", o: [12, 21] }],
  ],
});
