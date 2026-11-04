import { createIcon } from "../runtime/createIcon.js";

export const SendHorizontal = createIcon("SendHorizontal", "send-horizontal", {
  nodes: [
    [
      "path",
      { d: "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" },
      { r: "shoot", x: 1, a: 5, o: [12.499, 12] },
    ],
    ["path", { d: "M6 12h16" }, { r: "shoot", x: 1, a: 5, o: [12.499, 12] }],
  ],
});
