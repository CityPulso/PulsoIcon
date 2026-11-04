import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "more-vert-circle" (MIT, Copyright (c) 2021 Luca Burgio).
export const MoreVertCircle = createIcon("MoreVertCircle", "more-vert-circle", {
  nodes: [
    ["path", { d: "M12 7h.01" }, { r: "pop", o: [12, 7] }],
    ["path", { d: "M12 17h.01" }, { r: "pop", d: 0.16, o: [12, 17] }],
    ["path", { d: "M12 12h.01" }, { r: "pop", d: 0.08, o: [12, 12] }],
    ["path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" }],
  ],
});
