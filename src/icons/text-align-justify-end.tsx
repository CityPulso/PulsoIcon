import { createIcon } from "../runtime/createIcon.js";

export const TextAlignJustifyEnd = createIcon("TextAlignJustifyEnd", "text-align-justify-end", {
  nodes: [
    ["path", { d: "M3 5h18" }, { r: "growX", o: [21, 5] }],
    ["path", { d: "M3 12h18" }, { r: "growX", d: 0.06, o: [21, 12] }],
    ["path", { d: "M11 19h10" }, { r: "growX", d: 0.12, o: [21, 19] }],
  ],
});
