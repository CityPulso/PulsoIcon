import { icon } from "../icon.js";

export const TagX = icon("TagX", "tag-x", {
  nodes: [
    [
      "path",
      { d: "m16.5 6.5-3.914-3.914A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.43 2.43 0 0 0 3.42 0l1.79-1.79" },
      { r: "swing", a: 8, o: [3, 3] },
    ],
    ["path", { d: "m16.5 10.5 5 5" }, { r: "draw", d: 0.1, o: [19, 13] }],
    ["path", { d: "m21.5 10.5-5 5" }, { r: "draw", d: 0.2, o: [19, 13] }],
    ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" }, { r: "swing", a: 8, o: [3, 3] }],
  ],
});
