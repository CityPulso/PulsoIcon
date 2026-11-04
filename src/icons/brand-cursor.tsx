import { createIcon } from "../runtime/createIcon.js";

export const BrandCursor = createIcon("BrandCursor", "brand-cursor", {
  nodes: [
    ["path", { d: "M12 2 21 7v10l-9 5-9-5V7z" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M3 7l9 5 9-5" }, { r: "fade", d: 0.05, o: [12, 9.5] }],
    ["path", { d: "M12 12v10" }, { r: "grow", d: 0.1, o: [12, 12] }],
    ["path", { d: "M12 12l5.5 3" }, { r: "draw", d: 0.2, o: [14.75, 13.5] }],
  ],
});
