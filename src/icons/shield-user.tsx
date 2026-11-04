import { createIcon } from "../runtime/createIcon.js";

export const ShieldUser = createIcon("ShieldUser", "shield-user", {
  nodes: [
    [
      "path",
      { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" },
      { r: "press", a: 0.04, o: [12, 12.001] },
    ],
    ["path", { d: "M6.376 18.91a6 6 0 0 1 11.249.003" }, { r: "rise", d: 0.1, a: 1, o: [12.001, 16.957] }],
    ["circle", { cx: "12", cy: "11", r: "4" }, { r: "float", d: 0.05, a: 1.5, o: [12, 11] }],
  ],
});
