import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "domotic-warning" (MIT, Copyright (c) 2021 Luca Burgio).
export const DomoticWarning = createIcon("DomoticWarning", "domotic-warning", {
  nodes: [
    ["path", { d: "M12 9V12" }, { r: "pop", d: 0, o: [12, 10.5] }],
    ["path", { d: "M12 16.01L12.01 15.9989" }, { r: "pop", d: 0.15, o: [12, 16] }],
    ["path", { d: "M2 8L11.7317 3.13416C11.9006 3.04971 12.0994 3.0497 12.2683 3.13416L22 8" }],
    ["path", { d: "M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V11" }],
  ],
});
