import { createIcon } from "../runtime/createIcon.js";

export const BrandKoFi = createIcon("BrandKoFi", "brand-ko-fi", {
  nodes: [
    ["path", { d: "M3 7h14v6a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6z" }, { r: "press", a: 0.04, o: [10, 13] }],
    ["path", { d: "M17 9h1.5a2.5 2.5 0 0 1 0 5H17" }, { r: "press", a: 0.04, o: [10, 13] }],
    ["path", { d: "M10 15l-2.2-2.2a1.3 1.3 0 0 1 2.2-1.6 1.3 1.3 0 0 1 2.2 1.6z" }, { r: "beat", d: 0.1, a: 0.2, o: [10, 13] }],
  ],
});
