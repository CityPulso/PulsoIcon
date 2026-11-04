import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "hivemq" (CC0-1.0). HiveMQ is a trademark of its owner.

export const BrandHivemq = createIcon("BrandHivemq", "brand-hivemq", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["ellipse", { cx: "12", cy: "14", rx: "2", ry: "3.5" }, { r: "float", a: 1 }],
    ["circle", { cx: "12", cy: "8.5", r: "1.5" }, { r: "float", a: 1 }],
    ["path", { d: "M10.3 12.5C8.5 10 5.5 9.5 5.5 11.5s3 2.5 4.8 1" }, { r: "flicker", d: 0.1 }],
    ["path", { d: "M13.7 12.5c1.8-2.5 4.8-3 4.8-1s-3 2.5-4.8 1" }, { r: "flicker", d: 0.1 }],
    ["path", { d: "M11 7.2l-1-2M13 7.2l1-2" }, { r: "float", a: 1 }],
  ],
});
