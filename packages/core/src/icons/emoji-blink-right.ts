import { icon } from "../icon.js";

// Adapted from Iconoir "emoji-blink-right" (MIT, Copyright (c) 2021 Luca Burgio).
export const EmojiBlinkRight = icon("EmojiBlinkRight", "emoji-blink-right", {
  nodes: [
    ["path", { d: "M8.5 8.5h.01" }, { r: "wobble", a: 6, o: [12, 12] }],
    [
      "path",
      { d: "M14 9H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" },
      { r: "wobble", a: 6, o: [12, 12] },
    ],
    ["path", { d: "M7.5 14.5C7.5 14.5 9 16.5 12 16.5C15 16.5 16.5 14.5 16.5 14.5" }, { r: "wobble", a: 6, o: [12, 12] }],
  ],
});
