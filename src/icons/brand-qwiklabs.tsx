import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "qwiklabs" (CC0-1.0). Qwiklabs is a trademark of its owner.
export const BrandQwiklabs = createIcon("BrandQwiklabs", "brand-qwiklabs", {
  nodes: [
    ["path", { d: "M8 20.1a9.5 9.5 0 1 1 8 0" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "12", cy: "10.5", r: "3" }, { r: "pop", o: [12, 10.5] }],
    ["path", { d: "M12 13.5V22" }, { r: "grow", o: [12, 22] }],
  ],
});
