import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "droplet-cog" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const DropletCog = createIcon("DropletCog", "droplet-cog", {
  nodes: [
    [
      "path",
      {
        d: "M18.421 11.56a6.702 6.702 0 0 0 -.357 -.683l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546a7.144 7.144 0 0 0 4.518 1.58",
      },
    ],
    ["path", { d: "M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", d: 0.1, o: [19, 19] }],
    ["path", { d: "M19.001 15.5v1.5" }, { r: "spin", d: 0.1, o: [19, 19] }],
    ["path", { d: "M19.001 21v1.5" }, { r: "spin", d: 0.1, o: [19, 19] }],
    ["path", { d: "M22.032 17.25l-1.299 .75" }, { r: "spin", d: 0.1, o: [19, 19] }],
    ["path", { d: "M17.27 20l-1.3 .75" }, { r: "spin", d: 0.1, o: [19, 19] }],
    ["path", { d: "M15.97 17.25l1.3 .75" }, { r: "spin", d: 0.1, o: [19, 19] }],
    ["path", { d: "M20.733 20l1.3 .75" }, { r: "spin", d: 0.1, o: [19, 19] }],
  ],
});
