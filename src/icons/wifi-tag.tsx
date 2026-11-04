import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "wifi-tag" (MIT, Copyright (c) 2021 Luca Burgio).
export const WifiTag = createIcon("WifiTag", "wifi-tag", {
  nodes: [
    ["path", { d: "M2 15V9C2 5.68629 4.68629 3 8 3H16C19.3137 3 22 5.68629 22 9V15C22 18.3137 19.3137 21 16 21H8C4.68629 21 2 18.3137 2 15Z" }],
    ["path", { d: "M12 14.76L12.01 14.7489" }, { r: "pop", o: [12, 14.75] }],
    ["path", { d: "M7 11.2499C9.5 8.25001 14.5 8.25 17 11.25" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M9 13.25C10.5 11.25 13.5 11.25 15 13.25" }, { r: "draw", d: 0.1 }],
  ],
});
