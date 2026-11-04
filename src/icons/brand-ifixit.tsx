import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "ifixit" (CC0-1.0). iFixit is a trademark of its owner.

export const BrandIfixit = createIcon("BrandIfixit", "brand-ifixit", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    [
      "path",
      { d: "M12 14.47 9.35 17.13 6.87 14.65 9.53 12 6.87 9.35 9.35 6.87 12 9.53 14.65 6.87 17.13 9.35 14.47 12 17.13 14.65 14.65 17.13z" },
      { r: "turn", a: 90, o: [12, 12] },
    ],
  ],
});
