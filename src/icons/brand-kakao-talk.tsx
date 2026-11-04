import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "brand-kakao-talk" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const BrandKakaoTalk = createIcon("BrandKakaoTalk", "brand-kakao-talk", {
  nodes: [
    ["path", { d: "M10 8v7" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M14 10l-2 2.5l2 2.5" }, { r: "draw", d: 0.25 }],
    [
      "path",
      {
        d: "M12 4c4.97 0 9 3.358 9 7.5c0 4.142 -4.03 7.5 -9 7.5c-.67 0 -1.323 -.061 -1.95 -.177l-3.05 2.177l.592 -2.962c-2.741 -1.284 -4.592 -3.73 -4.592 -6.538c0 -4.142 4.03 -7.5 9 -7.5",
      },
      { r: "jelly", a: 0.1, o: [12, 12] },
    ],
  ],
});
