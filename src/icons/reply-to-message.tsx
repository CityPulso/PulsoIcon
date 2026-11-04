import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "reply-to-message" (MIT, Copyright (c) 2021 Luca Burgio).
export const ReplyToMessage = createIcon("ReplyToMessage", "reply-to-message", {
  nodes: [
    ["path", { d: "M7 8L12 11L17 8" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M10 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V12.8571" }],
    ["path", { d: "M13 17.1111H19.3C22.9 17.1111 22.9 22 19.3 22M13 17.1111L16.15 14M13 17.1111L16.15 20.2222" }, { r: "slide", x: -1, y: 0, a: 2, o: [17, 18] }],
  ],
});
