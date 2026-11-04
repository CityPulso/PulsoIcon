import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "insomnia" (CC0-1.0). Insomnia is a trademark of its owner.
export const BrandInsomnia = createIcon("BrandInsomnia", "brand-insomnia", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "5.5" }, { r: "blink", d: 0.1, o: [12, 12] }],
    ["circle", { cx: "10.25", cy: "10.25", r: "1.5" }, { r: "twinkle", d: 0.2, o: [10.25, 10.25] }],
  ],
});
