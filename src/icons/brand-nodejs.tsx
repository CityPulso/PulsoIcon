import { createIcon } from "../runtime/createIcon.js";

export const BrandNodejs = createIcon("BrandNodejs", "brand-nodejs", {
  nodes: [
    ["path", { d: "M12 2 21 7v10l-9 5-9-5V7z" }, { r: "spin", a: 60, o: [12, 12] }],
    ["path", { d: "M10.5 9v5a1.5 1.5 0 0 1-3 0" }, { r: "draw", d: 0.1, o: [9, 12.5] }],
    ["path", { d: "M16.5 9.6a1.6 1.6 0 0 0-1.5-.6c-.9 0-1.6.5-1.6 1.2 0 1.8 3.1 1 3.1 2.9 0 .8-.7 1.3-1.6 1.3a1.8 1.8 0 0 1-1.7-.9" }, { r: "draw", d: 0.2, o: [14.9, 11.6] }],
  ],
});
