import { createIcon } from "../runtime/createIcon.js";

export const BrandXboxY = createIcon("BrandXboxY", "brand-xbox-y", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.06, o: [12, 12] }],
    ["path", { d: "M8.5 7.5 12 12l3.5-4.5M12 12v4.5" }, { r: "press", a: 0.12, d: 0.03, o: [12, 12] }],
  ],
});
