import { createIcon } from "../runtime/createIcon.js";

export const VenetianMask = createIcon("VenetianMask", "venetian-mask", {
  nodes: [
    ["path", { d: "M18 11c-1.5 0-2.5.5-3 2" }, { r: "blink", d: 0.1, o: [12, 12] }],
    [
      "path",
      { d: "M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z" },
      { r: "wobble", a: 5, o: [12, 12.5] },
    ],
    ["path", { d: "M6 11c1.5 0 2.5.5 3 2" }, { r: "blink", d: 0.1, o: [12, 12] }],
  ],
});
