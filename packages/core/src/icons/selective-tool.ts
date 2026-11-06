import { icon } from "../icon.js";

// Adapted from Iconoir "selective-tool" (MIT, Copyright (c) 2021 Luca Burgio).
export const SelectiveTool = icon("SelectiveTool", "selective-tool", {
  nodes: [
    ["path", { d: "M12 12h.01" }, { r: "pop", d: 0.15, o: [12, 12] }],
    ["path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" }, { r: "pulse", o: [12, 12] }],
  ],
});
