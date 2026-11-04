import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "kakao" (CC0-1.0). Kakao is a trademark of its owner.
export const BrandKakao = createIcon("BrandKakao", "brand-kakao", {
  nodes: [
    ["path", { d: "M3.5 5v14 M10 10l-6 5 6 4" }, { r: "draw" }],
    ["circle", { cx: "15.75", cy: "15.5", r: "3.5" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M19.25 11.5V19" }, { r: "draw", d: 0.2 }],
  ],
});
