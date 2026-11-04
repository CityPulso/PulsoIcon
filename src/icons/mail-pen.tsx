import { createIcon } from "../runtime/createIcon.js";

export const MailPen = createIcon("MailPen", "mail-pen", {
  nodes: [
    [
      "path",
      { d: "M15.363 17.634a2 2 0 00-.506.854l-.837 2.87a.5.5 0 00.62.62l2.87-.837a2 2 0 00.854-.506l3.013-3.009a1 1 0 10-3.004-3.004z" },
      { r: "tilt", d: 0.1, a: 14, o: [15, 21] },
    ],
    ["path", { d: "M22 10.38V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h6.25" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m22 7-8.991 5.727a2 2 0 01-2.009 0L2 7" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
