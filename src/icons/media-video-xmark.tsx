import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "media-video-xmark" (MIT, Copyright (c) 2021 Luca Burgio).
export const MediaVideoXmark = createIcon("MediaVideoXmark", "media-video-xmark", {
  nodes: [
    ["path", { d: "M16.8786 21.1213L19 19M21.1213 16.8787L19 19M19 19L16.8786 16.8787M19 19L21.1213 21.1213" }, { r: "draw", o: [19, 19] }],
    ["path", { d: "M13 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V13" }],
    [
      "path",
      {
        d: "M9.89768 8.51296C9.49769 8.28439 9 8.57321 9 9.03391V14.9661C9 15.4268 9.49769 15.7156 9.89768 15.487L15.0883 12.5209C15.4914 12.2906 15.4914 11.7094 15.0883 11.4791L9.89768 8.51296Z",
      },
      { r: "press", d: 0.1, a: 0.15, o: [11, 12] },
    ],
  ],
});
