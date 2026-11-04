import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "helm" (CC0-1.0). Helm is a trademark of its owner.

export const BrandHelm = createIcon("BrandHelm", "brand-helm", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "6" }, { r: "turn", a: 45, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "1.5" }, { r: "turn", a: 45, o: [12, 12] }],
    ["path", { d: "M12 2v4" }, { r: "turn", a: 45, o: [12, 12] }],
    ["path", { d: "M12 18v4" }, { r: "turn", a: 45, o: [12, 12] }],
    ["path", { d: "M2 12h4" }, { r: "turn", a: 45, o: [12, 12] }],
    ["path", { d: "M18 12h4" }, { r: "turn", a: 45, o: [12, 12] }],
    ["path", { d: "M4.9 4.9l2.85 2.85" }, { r: "turn", a: 45, o: [12, 12] }],
    ["path", { d: "M16.25 16.25l2.85 2.85" }, { r: "turn", a: 45, o: [12, 12] }],
    ["path", { d: "M19.1 4.9l-2.85 2.85" }, { r: "turn", a: 45, o: [12, 12] }],
    ["path", { d: "M7.75 16.25 4.9 19.1" }, { r: "turn", a: 45, o: [12, 12] }],
  ],
});
