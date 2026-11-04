import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "fastapi" (CC0-1.0). FastAPI is a trademark of its owner.
export const BrandFastapi = createIcon("BrandFastapi", "brand-fastapi", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M14 5.5l-5 7.5h5.5l-3 5.5" }, { r: "flicker", d: 0.1, o: [12, 12] }],
  ],
});
