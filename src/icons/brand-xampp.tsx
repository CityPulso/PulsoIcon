import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "xampp" (CC0-1.0). XAMPP is a trademark of its owner.
export const BrandXampp = createIcon("BrandXampp", "brand-xampp", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }, { r: "press", a: 0.05, o: [12, 12] }],
    [
      "path",
      {
        d: "M9.25 7.5a2.25 2.25 0 0 0-1.8 3.6L8.25 12l-.8.9a2.25 2.25 0 0 0 1.8 3.6c1.5 0 1.75-1.5 2.75-1.5s1.25 1.5 2.75 1.5a2.25 2.25 0 0 0 1.8-3.6L15.75 12l.8-.9a2.25 2.25 0 0 0-1.8-3.6c-1.5 0-1.75 1.5-2.75 1.5S10.75 7.5 9.25 7.5z",
      },
      { r: "wobble", d: 0.1, a: 10, o: [12, 12] },
    ],
  ],
});
