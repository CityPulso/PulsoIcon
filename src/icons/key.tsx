import { createIcon } from "../runtime/createIcon.js";

export const Key = createIcon("Key", "key", {
  nodes: [
    ["path", { d: "m2 21 9.6-9.6" }, { r: "turn", a: -25, o: [7, 17] }],
    ["path", { d: "m7.5 15.5 2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19" }, { r: "turn", a: -25, o: [7, 17] }],
    ["circle", { cx: "15.5", cy: "7.5", r: "5.5" }, { r: "turn", a: -25, o: [7, 17] }],
  ],
});
