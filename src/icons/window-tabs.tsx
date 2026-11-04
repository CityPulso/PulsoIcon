import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "window-tabs" (MIT, Copyright (c) 2021 Luca Burgio).
export const WindowTabs = createIcon("WindowTabs", "window-tabs", {
  nodes: [
    ["path", { d: "M22 8H15.5M9 4V8H15.5M15.5 8V4" }, { r: "draw" }],
    [
      "path",
      {
        d: "M2 17.7143V6.28571C2 5.02335 2.99492 4 4.22222 4H19.7778C21.0051 4 22 5.02335 22 6.28571V17.7143C22 18.9767 21.0051 20 19.7778 20H4.22222C2.99492 20 2 18.9767 2 17.7143Z",
      },
    ],
  ],
});
