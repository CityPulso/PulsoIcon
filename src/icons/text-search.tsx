import { createIcon } from "../runtime/createIcon.js";

export const TextSearch = createIcon("TextSearch", "text-search", {
  nodes: [
    ["path", { d: "M21 5H3" }, { r: "growX", o: [3, 12] }],
    ["path", { d: "M10 12H3" }, { r: "growX", d: 0.05, o: [3, 12] }],
    ["path", { d: "M10 19H3" }, { r: "growX", d: 0.1, o: [3, 12] }],
    ["circle", { cx: "17", cy: "15", r: "3" }, { r: "swing", d: 0.15, a: 15, o: [17, 15] }],
    ["path", { d: "m21 19-1.9-1.9" }, { r: "swing", d: 0.15, a: 15, o: [17, 15] }],
  ],
});
