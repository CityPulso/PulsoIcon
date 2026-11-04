import { createIcon } from "../runtime/createIcon.js";

export const Ghost = createIcon("Ghost", "ghost", {
  nodes: [
    ["path", { d: "M15 10v1" }, { r: "blink", d: 0.2, o: [12, 10.5] }],
    [
      "path",
      {
        d: "M7.528 20.472a1.6 1.6 0 012.277 0l1.057 1.056a1.6 1.6 0 002.276 0l1.057-1.056a1.6 1.6 0 012.277 0l1.114 1.114a1.4 1.4 0 002.414-1V10a8 8 0 00-16 0v10.586a1.4 1.4 0 002.414 1z",
      },
      { r: "float", a: 2, o: [12, 12.011] },
    ],
    ["path", { d: "M9 10v1" }, { r: "blink", d: 0.2, o: [12, 10.5] }],
  ],
});
