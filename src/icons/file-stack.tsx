import { createIcon } from "../runtime/createIcon.js";

export const FileStack = createIcon("FileStack", "file-stack", {
  nodes: [
    ["path", { d: "M11 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1" }, { r: "press", d: 0.1, a: 0.04, o: [7, 17] }],
    ["path", { d: "M16 16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" }, { r: "slide", d: 0.05, x: 1, y: -1, a: 0.75, o: [12, 12] }],
    ["path", { d: "M21 6a2 2 0 0 0-.586-1.414l-2-2A2 2 0 0 0 17 2h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [17, 7] }],
  ],
});
