import { createIcon } from "../runtime/createIcon.js";

export const BrandGoogleOne = createIcon("BrandGoogleOne", "brand-google-one", {
  nodes: [
    ["path", { d: "M4.2 7.5A9 9 0 0 1 12 3" }, { r: "draw", o: [12, 12] }],
    ["path", { d: "M12 3a9 9 0 0 1 9 9" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M21 12a9 9 0 0 1-9 9" }, { r: "draw", d: 0.16, o: [12, 12] }],
    ["path", { d: "M12 21a9 9 0 0 1-8.8-7" }, { r: "draw", d: 0.24, o: [12, 12] }],
    ["path", { d: "M9.5 9.5 12.5 7.5V16.5" }, { r: "stamp", d: 0.3, o: [12, 12] }],
  ],
});
