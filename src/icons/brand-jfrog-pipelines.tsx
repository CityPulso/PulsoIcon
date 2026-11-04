import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "jfrogpipelines" (CC0-1.0). JFrog Pipelines is a trademark of its owner.
export const BrandJfrogPipelines = createIcon("BrandJfrogPipelines", "brand-jfrog-pipelines", {
  nodes: [
    ["path", { d: "M12 4a7 7 0 1 1-7 7" }, { r: "spin", o: [12, 11] }],
    ["path", { d: "M10 2l2 2-2 2" }, { r: "spin", o: [12, 11] }],
    ["circle", { cx: "12", cy: "11", r: "2.5" }, { r: "pop", o: [12, 11], d: 0.1 }],
    ["path", { d: "M3 21h18" }, { r: "draw", d: 0.2 }],
  ],
});
