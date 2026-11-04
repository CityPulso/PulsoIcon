import { createIcon } from "../runtime/createIcon.js";

export const BrandTwitch = createIcon("BrandTwitch", "brand-twitch", {
  nodes: [
    ["path", { d: "M21 2H3v16h5v4l4-4h5l4-4V2z" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M11 7v4" }, { r: "blink", d: 0.1, o: [13.5, 9] }],
    ["path", { d: "M16 7v4" }, { r: "blink", d: 0.1, o: [13.5, 9] }],
  ],
});
