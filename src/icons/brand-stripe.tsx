import { createIcon } from "../runtime/createIcon.js";

export const BrandStripe = createIcon("BrandStripe", "brand-stripe", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M14.6 8.4c-.8-.5-1.8-.8-2.8-.8-1.7 0-2.8.8-2.8 2 0 3 6 1.9 6 5.2 0 1.4-1.2 2.4-3.1 2.4-1.2 0-2.5-.3-3.5-.9" }, { r: "draw", d: 0.05, o: [12, 12.5] }],
  ],
});
