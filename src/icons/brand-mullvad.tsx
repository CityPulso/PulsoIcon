import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "mullvad" (CC0-1.0). Mullvad is a trademark of its owner.
export const BrandMullvad = createIcon("BrandMullvad", "brand-mullvad", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 20v-5.5a5.5 5.5 0 0 1 5.5-5.5c2 0 3.2 1.2 4.2 2.8l1.6 2.6c.4.7 0 1.6-.9 1.6H13" }, { r: "float", a: 1, o: [12, 15] }],
    ["path", { d: "M14 12h.01" }, { r: "blink", d: 0.2, o: [14, 12] }],
  ],
});
