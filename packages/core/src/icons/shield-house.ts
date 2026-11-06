import { icon } from "../icon.js";

export const ShieldHouse = icon("ShieldHouse", "shield-house", {
  nodes: [
    ["path", { d: "M15 22a1 1 0 01-1-1v-4a1 1 0 01.445-.832l3-2a1 1 0 011.11 0l3 2A1 1 0 0122 17v4a1 1 0 01-1 1z" }, { r: "rise", d: 0.05, a: 2, o: [18, 18] }],
    ["path", { d: "M18 22v-3" }, { r: "rise", d: 0.05, a: 2, o: [18, 18] }],
    [
      "path",
      { d: "M20 10.418V6a1 1 0 00-1-1c-2 0-4.49-1.19-6.24-2.72a1.17 1.17 0 00-1.52 0C9.5 3.8 7 5 5 5a1 1 0 00-1 1v7c0 4.602 2.67 7.1 6.037 8.603" },
      { r: "press", a: 0.04, o: [12, 11.801] },
    ],
  ],
});
