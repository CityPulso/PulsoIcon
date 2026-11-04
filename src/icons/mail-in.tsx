import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "mail-in" (MIT, Copyright (c) 2021 Luca Burgio).
export const MailIn = createIcon("MailIn", "mail-in", {
  nodes: [
    ["path", { d: "M5 9L9.5 12L14 9" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M17 19H3C1.89543 19 1 18.1046 1 17V7C1 5.89543 1.89543 5 3 5H16C17.1046 5 18 5.89543 18 7V9" }],
    ["path", { d: "M23 14H17M17 14L20 11M17 14L20 17" }, { r: "slide", x: -1, y: 0, a: 2 }],
  ],
});
