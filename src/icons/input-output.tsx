import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "input-output" (MIT, Copyright (c) 2021 Luca Burgio).
export const InputOutput = createIcon("InputOutput", "input-output", {
  nodes: [
    ["path", { d: "M14 19C17.866 19 21 15.866 21 12C21 8.13401 17.866 5 14 5C10.134 5 7 8.13401 7 12C7 15.866 10.134 19 14 19Z" }, { r: "pulse", a: 0.1, o: [14, 12] }],
    ["path", { d: "M3 19L3 5" }, { r: "grow", o: [3, 12] }],
  ],
});
