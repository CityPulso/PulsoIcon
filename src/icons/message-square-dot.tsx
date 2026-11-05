import { createIcon } from "../runtime/createIcon.js";

export const MessageSquareDot = createIcon("MessageSquareDot", "message-square-dot", {
  nodes: [
    ["path", { d: "M12.7 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4.7" }, { r: "press", a: 0.04, o: [12, 12.498] }],
    ["circle", { cx: "19", cy: "6", r: "3" }, { r: "pop", d: 0.1, o: [19, 6] }],
  ],
  solid: [
    [
      "path",
      { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" },
      { r: "press", a: 0.04, o: [12, 12.498] },
    ],
    ["circle", { cx: "19", cy: "6", r: "5" }, { r: "pop", d: 0.1, o: [19, 6] }, "cut"],
    ["circle", { cx: "19", cy: "6", r: "3" }, { r: "pop", d: 0.1, o: [19, 6] }],
  ],
});
