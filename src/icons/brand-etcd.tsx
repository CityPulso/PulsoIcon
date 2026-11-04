import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "etcd" (CC0-1.0). etcd is a trademark of its owner.
export const BrandEtcd = createIcon("BrandEtcd", "brand-etcd", {
  nodes: [
    [
      "polygon",
      {
        points: "12 2.5 14.98 4.79 18.72 5.28 19.21 9.02 21.5 12 19.21 14.98 18.72 18.72 14.98 19.21 12 21.5 9.02 19.21 5.28 18.72 4.79 14.98 2.5 12 4.79 9.02 5.28 5.28 9.02 4.79",
      },
      { r: "spin", a: 45, o: [12, 12] },
    ],
    ["path", { d: "M9.5 12h.01" }, { r: "blink", d: 0.4, o: [9.5, 12] }],
    ["path", { d: "M14.5 12h.01" }, { r: "blink", d: 0.4, o: [14.5, 12] }],
  ],
});
