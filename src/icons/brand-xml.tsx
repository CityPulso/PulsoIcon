import { createIcon } from "../runtime/createIcon.js";

export const BrandXml = createIcon("BrandXml", "brand-xml", {
  nodes: [
    ["path", { d: "m8 7-5 5 5 5" }, { r: "slide", x: -1, a: 1, o: [5.5, 12] }],
    ["path", { d: "m16 7 5 5-5 5" }, { r: "slide", x: 1, a: 1, o: [18.5, 12] }],
    ["path", { d: "m14 4-4 16" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
});
