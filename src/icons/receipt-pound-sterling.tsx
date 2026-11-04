import { createIcon } from "../runtime/createIcon.js";

export const ReceiptPoundSterling = createIcon("ReceiptPoundSterling", "receipt-pound-sterling", {
  nodes: [
    ["path", { d: "M10 17V9.5a1 1 0 0 1 5 0" }, { r: "draw", d: 0.05, o: [12.5, 12] }],
    [
      "path",
      {
        d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",
      },
      { r: "jelly", a: 0.05, o: [12, 22] },
    ],
    ["path", { d: "M8 13h5" }, { r: "growX", d: 0.2, o: [10.5, 13] }],
    ["path", { d: "M8 17h7" }, { r: "growX", d: 0.26, o: [11.5, 17] }],
  ],
});
