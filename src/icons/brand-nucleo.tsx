import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "nucleo" (CC0-1.0). Nucleo is a trademark of its owner.
export const BrandNucleo = createIcon("BrandNucleo", "brand-nucleo", {
  nodes: [
    ["path", { d: "M12 2l8.5 5v10L12 22l-8.5-5V7z" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 8.5h10L12 17z" }, { r: "turn", d: 0.05, a: 20, o: [12, 11.5] }],
    ["path", { d: "M12 11.5h.01" }, { r: "pop", d: 0.2, o: [12, 11.5] }],
  ],
});
