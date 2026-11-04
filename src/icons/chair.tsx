import { createIcon } from "../runtime/createIcon.js";

export const Chair = createIcon("Chair", "chair", {
  nodes: [
    ["path", { d: "M7 12V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8" }, { r: "float", d: 0.1, a: 1, o: [12, 7] }],
    ["path", { d: "M5 13a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" }, { r: "press", a: 0.06, o: [12, 15] }],
    ["path", { d: "M7 15v7M17 15v7" }, { r: "fade", o: [12, 18] }],
  ],
});
