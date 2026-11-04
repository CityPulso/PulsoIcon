import { createIcon } from "../runtime/createIcon.js";

export const BrandGoogleDrive = createIcon("BrandGoogleDrive", "brand-google-drive", {
  nodes: [
    ["path", { d: "M8.5 3.5h7l6.5 11-3.5 6h-13l-3.5-6z" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8.5 3.5 15 14.5" }, { r: "draw", d: 0.05, o: [12, 9] }],
    ["path", { d: "M12 9.5 5.5 20.5" }, { r: "draw", d: 0.12, o: [9, 15] }],
    ["path", { d: "M9 14.5h13" }, { r: "draw", d: 0.19, o: [15.5, 14.5] }],
  ],
});
