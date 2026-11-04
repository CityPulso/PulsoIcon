import { createIcon } from "../runtime/createIcon.js";

export const BrandStackoverflow = createIcon("BrandStackoverflow", "brand-stackoverflow", {
  nodes: [
    ["path", { d: "M4 14v6.5h15V14" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7.5 17.5h8" }, { r: "pop", d: 0.05, o: [11.5, 17.5] }],
    ["path", { d: "m7.8 14 7.9 1.4" }, { r: "pop", d: 0.1, o: [11.75, 14.7] }],
    ["path", { d: "m8.8 10.4 7.3 3.4" }, { r: "pop", d: 0.15, o: [12.45, 12.1] }],
    ["path", { d: "m10.8 7 6.2 5" }, { r: "pop", d: 0.2, o: [13.9, 9.5] }],
    ["path", { d: "m13.8 4 4.5 6.6" }, { r: "pop", d: 0.25, o: [16, 7.3] }],
  ],
});
