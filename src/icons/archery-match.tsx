import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "archery-match" (MIT, Copyright (c) 2021 Luca Burgio).
export const ArcheryMatch = createIcon("ArcheryMatch", "archery-match", {
  nodes: [
    [
      "path",
      { d: "M8.61096 15.8891L20.6318 3.86829M8.61096 15.8891H5.78253L2.9541 18.7175H5.78253V21.546L8.61096 18.7175V15.8891ZM20.6318 3.86829H17.8033M20.6318 3.86829V6.69671" },
      { r: "slide", x: 1, y: -1, a: 1.5 },
    ],
    [
      "path",
      { d: "M15.3891 15.8891L3.36829 3.86829M15.3891 15.8891H18.2175L21.046 18.7175H18.2175V21.546L15.3891 18.7175V15.8891ZM3.36829 3.86829H6.19672M3.36829 3.86829V6.69671" },
      { r: "slide", d: 0.1, x: -1, y: -1, a: 1.5 },
    ],
  ],
});
