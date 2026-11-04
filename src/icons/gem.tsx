import { createIcon } from "../runtime/createIcon.js";

export const Gem = createIcon("Gem", "gem", {
  nodes: [
    ["path", { d: "M10.5 3 8 9l4 13 4-13-2.5-6" }, { r: "fade", d: 0.1, o: [12, 12.5] }],
    [
      "path",
      { d: "M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z" },
      { r: "twinkle", a: 12, o: [12, 12.5] },
    ],
    ["path", { d: "M2 9h20" }, { r: "growX", d: 0.15, o: [12, 9] }],
  ],
});
