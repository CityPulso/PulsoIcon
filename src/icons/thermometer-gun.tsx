import { createIcon } from "../runtime/createIcon.js";

export const ThermometerGun = createIcon("ThermometerGun", "thermometer-gun", {
  nodes: [
    ["path", { d: "M9 5h9a3 3 0 0 1 0 6h-2l1 8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1l-1-8H9z" }, { r: "press", a: 0.04, o: [14, 12] }],
    ["path", { d: "M9 6.5H6.5v3H9" }, { r: "press", a: 0.04, o: [14, 12] }],
    ["path", { d: "M4 8H2" }, { r: "fade", d: 0.1, o: [3, 8] }],
    ["path", { d: "M4 5.5 2.5 4" }, { r: "fade", d: 0.2, o: [3, 5] }],
    ["path", { d: "M4 10.5 2.5 12" }, { r: "fade", d: 0.2, o: [3, 11] }],
  ],
});
