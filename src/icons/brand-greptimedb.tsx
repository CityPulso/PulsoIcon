import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "greptimedb" (CC0-1.0). GreptimeDB is a trademark of its owner.

export const BrandGreptimedb = createIcon("BrandGreptimedb", "brand-greptimedb", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M17.32 8.27A6.5 6.5 0 1 0 18.5 12" }, { r: "spin", a: 360, o: [12, 12] }],
    ["path", { d: "M14.12 9.88A3 3 0 1 0 15 12" }, { r: "spin", a: -360, o: [12, 12] }],
    ["path", { d: "M12 12h10" }, { r: "growX", d: 0.2, o: [12, 12] }],
  ],
});
