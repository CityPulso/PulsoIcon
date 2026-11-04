import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "faker" (CC0-1.0). Faker is a trademark of its owner.
export const BrandFaker = createIcon("BrandFaker", "brand-faker", {
  nodes: [
    [
      "path",
      { d: "M2 14.5C2 19.47 6.48 22 12 22s10-2.53 10-7.5a10 10 0 0 0-1.3-4.83 4.5 4.5 0 1 0-7.05-5.5 8 8 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5A10 10 0 0 0 2 14.5" },
      { r: "wobble", a: 5, o: [12, 20] },
    ],
    ["ellipse", { cx: "8", cy: "12.5", rx: "1.75", ry: "2.25" }, { r: "blink", d: 0.1, o: [8, 12.5] }],
    ["ellipse", { cx: "16", cy: "12.5", rx: "1.75", ry: "2.25" }, { r: "blink", d: 0.1, o: [16, 12.5] }],
    ["path", { d: "M10.5 16.5a1.5 1.5 0 0 0 3 0" }, { r: "pop", d: 0.2, o: [12, 17] }],
  ],
});
