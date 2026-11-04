import { createIcon } from "../runtime/createIcon.js";

export const BrandMicrosoftLoop = createIcon("BrandMicrosoftLoop", "brand-microsoft-loop", {
  nodes: [
    ["path", { d: "M20.5 12a8.5 8.5 0 1 0-8.5 8.5h8.5z" }, { r: "redraw", o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "3.5" }, { r: "pop", d: 0.15, o: [12, 12] }],
  ],
});
