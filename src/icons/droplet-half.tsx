import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "droplet-half" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DropletHalf = createIcon("DropletHalf", "droplet-half", {
  nodes: [
    [
      "path",
      {
        d: "M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546",
      },
      { r: "float", a: 1, o: [12, 12] },
    ],
    ["path", { d: "M12 3v18" }, { r: "draw", d: 0.1 }],
  ],
});
