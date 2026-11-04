import { createIcon } from "../runtime/createIcon.js";

export const BrandViber = createIcon("BrandViber", "brand-viber", {
  nodes: [
    [
      "path",
      { d: "M12 2.5c4.8 0 8.6 1 9 5.3.3 2.4.3 4.4 0 6.8-.4 4.1-3.6 5.2-8.5 5.3L9 22.5v-2.7c-3.5-.6-5.6-2-6-5.2-.3-2.4-.3-4.4 0-6.8.4-4.3 4.2-5.3 9-5.3z" },
      { r: "ring", a: 8, o: [12, 12] },
    ],
    ["path", { d: "M8 8c0 3.8 3.2 7 7 7l1-1.4-1.9-1.2-1 .8a4.8 4.8 0 0 1-2.3-2.3l.8-1L10.4 8z" }, { r: "ring", d: 0.05, a: 12, o: [12, 11] }],
    ["path", { d: "M13 5.5A4 4 0 0 1 17 9.5" }, { r: "draw", d: 0.2, o: [15, 7.5] }],
  ],
});
