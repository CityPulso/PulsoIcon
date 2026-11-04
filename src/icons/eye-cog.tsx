import { createIcon } from "../runtime/createIcon.js";

// Adapted from Tabler Icons "eye-cog" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const EyeCog = createIcon("EyeCog", "eye-cog", {
  nodes: [
    ["path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }],
    ["path", { d: "M12 18c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" }],
    ["path", { d: "M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }, { r: "spin", a: 180, o: [19.001, 19] }],
    ["path", { d: "M19.001 15.5v1.5" }, { r: "spin", a: 180, o: [19.001, 19] }],
    ["path", { d: "M19.001 21v1.5" }, { r: "spin", a: 180, o: [19.001, 19] }],
    ["path", { d: "M22.032 17.25l-1.299 .75" }, { r: "spin", a: 180, o: [19.001, 19] }],
    ["path", { d: "M17.27 20l-1.3 .75" }, { r: "spin", a: 180, o: [19.001, 19] }],
    ["path", { d: "M15.97 17.25l1.3 .75" }, { r: "spin", a: 180, o: [19.001, 19] }],
    ["path", { d: "M20.733 20l1.3 .75" }, { r: "spin", a: 180, o: [19.001, 19] }],
  ],
});
