import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "ign" (CC0-1.0). IGN is a trademark of its owner.

export const BrandIgn = createIcon("BrandIgn", "brand-ign", {
  nodes: [
    [
      "path",
      {
        d: "M6.7 3.52A10 10 0 0 1 17.3 3.52L12.94 7.6L11.06 7.6zM20.48 6.7A10 10 0 0 1 20.48 17.3L16.4 12.94L16.4 11.06zM17.3 20.48A10 10 0 0 1 6.7 20.48L11.06 16.4L12.94 16.4zM3.52 17.3A10 10 0 0 1 3.52 6.7L7.6 11.06L7.6 12.94z",
      },
      { r: "spin", a: 90, o: [12, 12] },
    ],
    ["path", { d: "M12 10l2 2-2 2-2-2z" }, { r: "twinkle", d: 0.2, o: [12, 12] }],
  ],
});
