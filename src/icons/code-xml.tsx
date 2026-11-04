import { createIcon } from "../runtime/createIcon.js";

export const CodeXml = createIcon("CodeXml", "code-xml", {
  nodes: [
    ["path", { d: "m18 16 4-4-4-4" }, { r: "slide", x: 1, a: 2, o: [20, 12] }],
    ["path", { d: "m6 8-4 4 4 4" }, { r: "slide", x: -1, a: 2, o: [4, 12] }],
    ["path", { d: "m14.5 4-5 16" }, { r: "wobble", d: 0.1, o: [12, 12] }],
  ],
});
