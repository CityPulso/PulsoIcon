import { createIcon } from "../runtime/createIcon.js";

export const BrandEthereum = createIcon("BrandEthereum", "brand-ethereum", {
  nodes: [
    ["path", { d: "M12 2 5 12l7 4 7-4z" }, { r: "float", a: 1.5, o: [12, 9] }],
    ["path", { d: "M5 13.5 12 22l7-8.5-7 4z" }, { r: "float", d: 0.08, a: 1, o: [12, 17.75] }],
    ["path", { d: "M5 12l7-3 7 3" }, { r: "fade", d: 0.15, o: [12, 10.5] }],
  ],
});
