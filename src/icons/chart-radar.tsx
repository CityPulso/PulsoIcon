import { createIcon } from "../runtime/createIcon.js";

export const ChartRadar = createIcon("ChartRadar", "chart-radar", {
  nodes: [
    ["path", { d: "M12 2v10" }, { r: "fade", o: [12, 7] }],
    ["path", { d: "m16 18 3.085-8.125L12 4.103 3.473 9.442l3.196 10.554z" }, { r: "spin", a: 120, o: [12, 12] }],
    ["path", { d: "m2 9 10 3 6 9" }, { r: "spin", a: 120, o: [12, 12] }],
    ["path", { d: "m6 21 6-9 10-3" }, { r: "spin", a: 120, o: [12, 12] }],
  ],
});
