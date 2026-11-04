import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "swagger" (CC0-1.0). Swagger is a trademark of its owner.
export const BrandSwagger = createIcon("BrandSwagger", "brand-swagger", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M9 7.5c-1 0-1.5.5-1.5 1.5v1.5c0 .8-.5 1.5-1.5 1.5 1 0 1.5.7 1.5 1.5V15c0 1 .5 1.5 1.5 1.5" }, { r: "slide", x: -1, y: 0, a: 1 }],
    ["path", { d: "M15 7.5c1 0 1.5.5 1.5 1.5v1.5c0 .8.5 1.5 1.5 1.5-1 0-1.5.7-1.5 1.5V15c0 1-.5 1.5-1.5 1.5" }, { r: "slide", x: 1, y: 0, a: 1 }],
    ["path", { d: "M10 12h.01" }, { r: "twinkle", d: 0.05, o: [10, 12] }],
    ["path", { d: "M12 12h.01" }, { r: "twinkle", d: 0.15, o: [12, 12] }],
    ["path", { d: "M14 12h.01" }, { r: "twinkle", d: 0.25, o: [14, 12] }],
  ],
});
