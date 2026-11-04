import { createIcon } from "../runtime/createIcon.js";

export const LayersPlus = createIcon("LayersPlus", "layers-plus", {
  nodes: [
    [
      "path",
      { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z" },
      { r: "float", a: 2, o: [12.011, 7] },
    ],
    ["path", { d: "M16 17h6" }, { r: "spin", d: 0.2, a: 90, o: [19, 17] }],
    ["path", { d: "M19 14v6" }, { r: "spin", d: 0.2, a: 90, o: [19, 17] }],
    ["path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178" }, { r: "press", d: 0.1, a: 0.05, o: [8.473, 16.999] }],
    ["path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962" }, { r: "press", d: 0.1, a: 0.05, o: [8.473, 16.999] }],
  ],
});
