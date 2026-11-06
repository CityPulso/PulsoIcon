import { icon } from "../icon.js";

// Adapted from Iconoir "media-image-list" (MIT, Copyright (c) 2021 Luca Burgio).
export const MediaImageList = icon("MediaImageList", "media-image-list", {
  nodes: [
    ["path", { d: "M21 7.6V20.4C21 20.7314 20.7314 21 20.4 21H7.6C7.26863 21 7 20.7314 7 20.4V7.6C7 7.26863 7.26863 7 7.6 7H20.4C20.7314 7 21 7.26863 21 7.6Z" }],
    ["path", { d: "M18 4H4.6C4.26863 4 4 4.26863 4 4.6V18" }, { r: "slide", x: -1, y: -1, a: 1 }],
    ["path", { d: "M7 16.8L12.4444 15L21 18" }],
    [
      "path",
      { d: "M16.5 13C15.6716 13 15 12.3284 15 11.5C15 10.6716 15.6716 10 16.5 10C17.3284 10 18 10.6716 18 11.5C18 12.3284 17.3284 13 16.5 13Z" },
      { r: "rise", d: 0.1, a: 2, o: [16.5, 11.5] },
    ],
  ],
});
