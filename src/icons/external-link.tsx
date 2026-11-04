import { createIcon } from "../runtime/createIcon.js";

export const ExternalLink = createIcon("ExternalLink", "external-link", {
  nodes: [
    ["path", { d: "M15 3h6v6" }, { r: "shoot", d: 0.05, x: 1, y: -1, a: 3, o: [15.5, 8.5] }],
    ["path", { d: "M10 14 21 3" }, { r: "shoot", d: 0.05, x: 1, y: -1, a: 3, o: [15.5, 8.5] }],
    ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }, { r: "press", a: 0.04, o: [10.5, 13.5] }],
  ],
});
