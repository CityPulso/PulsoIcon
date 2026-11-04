import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "lamborghini" (CC0-1.0). Lamborghini is a trademark of its owner.

export const BrandLamborghini = createIcon("BrandLamborghini", "brand-lamborghini", {
  nodes: [
    ["path", { d: "M4 3.5h16V11c0 5.5-3.5 8.5-8 10.5-4.5-2-8-5-8-10.5z" }, { r: "press", a: 0.03, o: [12, 12] }],
    ["path", { d: "M7 7.5c.5 2 2 3 3.5 3h3c1.5 0 3-1 3.5-3M10.5 10.5V14a1.5 1.5 0 0 0 3 0v-3.5" }, { r: "shake", d: 0.1, a: 0.8, o: [12, 11] }],
  ],
});
