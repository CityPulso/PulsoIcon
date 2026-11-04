import { createIcon } from "../runtime/createIcon.js";

export const TextAlignJustifyCenter = createIcon("TextAlignJustifyCenter", "text-align-justify-center", {
  nodes: [
    ["path", { d: "M3 5h18" }, { r: "growX", o: [12, 5] }],
    ["path", { d: "M3 12h18" }, { r: "growX", d: 0.06, o: [12, 12] }],
    ["path", { d: "M7 19h10" }, { r: "growX", d: 0.12, o: [12, 19] }],
  ],
});
