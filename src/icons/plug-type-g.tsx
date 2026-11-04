import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "plug-type-g" (MIT, Copyright (c) 2021 Luca Burgio).
export const PlugTypeG = createIcon("PlugTypeG", "plug-type-g", {
  nodes: [
    ["path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" }],
    ["path", { d: "M12 7V10" }, { r: "pop", o: [12, 8.5] }],
    ["path", { d: "M14 14H17" }, { r: "pop", d: 0.2, o: [15.5, 14] }],
    ["path", { d: "M7 14H10" }, { r: "pop", d: 0.1, o: [8.5, 14] }],
  ],
});
