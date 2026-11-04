import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "trivy" (CC0-1.0). Trivy is a trademark of its owner.
export const BrandTrivy = createIcon("BrandTrivy", "brand-trivy", {
  nodes: [
    ["path", { d: "M12 2l8.5 5v10L12 22l-8.5-5V7z" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "12", cy: "11.5", r: "4.5" }, { r: "pulse", d: 0.1, o: [12, 11.5] }],
    ["circle", { cx: "12", cy: "11.5", r: "1" }, { r: "pop", d: 0.2, o: [12, 11.5] }],
    ["path", { d: "M12 12.5V22" }],
  ],
});
