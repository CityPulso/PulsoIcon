import { createIcon } from "../runtime/createIcon.js";

export const BrandGooglePhotos = createIcon("BrandGooglePhotos", "brand-google-photos", {
  svg: { r: "spin", a: 90 },
  nodes: [
    ["path", { d: "M12 12V3.5a4.25 4.25 0 0 1 0 8.5" }],
    ["path", { d: "M12 12h8.5a4.25 4.25 0 0 1-8.5 0" }],
    ["path", { d: "M12 12v8.5a4.25 4.25 0 0 1 0-8.5" }],
    ["path", { d: "M12 12H3.5a4.25 4.25 0 0 1 8.5 0" }],
  ],
});
