import { createIcon } from "../runtime/createIcon.js";

export const FileChartPie = createIcon("FileChartPie", "file-chart-pie", {
  nodes: [
    ["path", { d: "M15.941 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.512" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M4.017 11.512a6 6 0 1 0 8.466 8.475" }, { r: "spin", d: 0.1, a: 90, o: [8, 16] }],
    [
      "path",
      { d: "M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z" },
      { r: "slide", d: 0.1, x: 1, y: -1, a: 1.5, o: [10.964, 13.036] },
    ],
  ],
});
