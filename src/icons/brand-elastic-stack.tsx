import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "elasticstack" (CC0-1.0). Elastic Stack is a trademark of its owner.
export const BrandElasticStack = createIcon("BrandElasticStack", "brand-elastic-stack", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "3" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M3 9h18" }, { r: "growX", d: 0.05, o: [3, 9] }],
    ["path", { d: "M3 15h18" }, { r: "growX", d: 0.15, o: [3, 15] }],
    ["path", { d: "M12 9v6" }, { r: "grow", d: 0.25, o: [12, 9] }],
  ],
});
