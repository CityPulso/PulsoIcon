import { icon } from "../icon.js";

// Adapted from Iconoir "plug-type-c" (MIT, Copyright (c) 2021 Luca Burgio).
export const PlugTypeC = icon("PlugTypeC", "plug-type-c", {
  nodes: [
    ["path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" }],
    ["path", { d: "M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z" }, { r: "pop", o: [8, 12] }],
    ["path", { d: "M16 14C17.1046 14 18 13.1046 18 12C18 10.8954 17.1046 10 16 10C14.8954 10 14 10.8954 14 12C14 13.1046 14.8954 14 16 14Z" }, { r: "pop", d: 0.1, o: [16, 12] }],
  ],
});
