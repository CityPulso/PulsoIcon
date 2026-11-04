import { createIcon } from "../runtime/createIcon.js";

export const CakeSlice = createIcon("CakeSlice", "cake-slice", {
  nodes: [
    ["path", { d: "M16 13H3" }, { r: "growX", d: 0.2, o: [9.5, 13] }],
    ["path", { d: "M16 17H3" }, { r: "growX", d: 0.28, o: [9.5, 17] }],
    [
      "path",
      { d: "m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6" },
      { r: "jelly", a: 0.08, o: [12, 21] },
    ],
    ["circle", { cx: "9", cy: "7", r: "2" }, { r: "float", d: 0.1, o: [9, 7] }],
  ],
});
