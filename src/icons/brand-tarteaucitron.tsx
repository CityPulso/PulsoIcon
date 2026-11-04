import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "tarteaucitron" (CC0-1.0). Tarteaucitron is a trademark of its owner.
export const BrandTarteaucitron = createIcon("BrandTarteaucitron", "brand-tarteaucitron", {
  nodes: [
    ["path", { d: "M8.5 9V6a3.5 3.5 0 0 1 7 0v3" }, { r: "lift", a: 1.5 }],
    ["circle", { cx: "12", cy: "15", r: "6.5" }, { r: "spin", d: 0.1, a: 60, o: [12, 15] }],
    ["path", { d: "M12 9.5v11M7.2 12.25l9.6 5.5M7.2 17.75l9.6-5.5" }, { r: "spin", d: 0.1, a: 60, o: [12, 15] }],
  ],
});
