import { createIcon } from "../runtime/createIcon.js";

export const TagPlus = createIcon("TagPlus", "tag-plus", {
  nodes: [
    ["path", { d: "M16 13h6" }, { r: "spin", d: 0.1, a: 90, o: [19, 13] }],
    [
      "path",
      { d: "m16.5 6.5-3.914-3.914A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l1.79-1.79" },
      { r: "swing", a: 8, o: [3, 3] },
    ],
    ["path", { d: "M19 10v6" }, { r: "spin", d: 0.1, a: 90, o: [19, 13] }],
    ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" }, { r: "swing", a: 8, o: [3, 3] }],
  ],
});
