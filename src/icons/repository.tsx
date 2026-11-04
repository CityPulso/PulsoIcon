import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "repository" (MIT, Copyright (c) 2021 Luca Burgio).
export const Repository = createIcon("Repository", "repository", {
  nodes: [
    ["path", { d: "M4 19V5C4 3.89543 4.89543 3 6 3H19.4C19.7314 3 20 3.26863 20 3.6V16.7143" }],
    ["path", { d: "M15 17V22L17.5 20.4L20 22V17" }, { r: "drop", x: 0, y: -1, a: 3, o: [17.5, 19.5] }],
    ["path", { d: "M6 17L20 17" }],
    ["path", { d: "M6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21H11.5" }],
  ],
});
