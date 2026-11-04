import { createIcon } from "../runtime/createIcon.js";

export const VectorPolygon = createIcon("VectorPolygon", "vector-polygon", {
  nodes: [
    ["path", { d: "m12.828 4.813 5.344 2.375" }, { r: "draw", d: 0.2, o: [12.229, 11.87] }],
    ["path", { d: "m15.769 18.153 3.461-8.306" }, { r: "draw", d: 0.24, o: [12.229, 11.87] }],
    ["path", { d: "m5.687 14.074 7.625 4.852" }, { r: "draw", d: 0.28, o: [12.229, 11.87] }],
    ["path", { d: "M9.772 5.579 5.228 11.42" }, { r: "draw", d: 0.32, o: [12.229, 11.87] }],
    ["circle", { cx: "11", cy: "4", r: "2" }, { r: "pop", o: [11, 4] }],
    ["circle", { cx: "15", cy: "20", r: "2" }, { r: "pop", d: 0.12, o: [15, 20] }],
    ["circle", { cx: "20", cy: "8", r: "2" }, { r: "pop", d: 0.06, o: [20, 8] }],
    ["circle", { cx: "4", cy: "13", r: "2" }, { r: "pop", d: 0.18, o: [4, 13] }],
  ],
});
