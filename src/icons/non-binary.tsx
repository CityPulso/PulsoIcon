import { createIcon } from "../runtime/createIcon.js";

export const NonBinary = createIcon("NonBinary", "non-binary", {
  text: true,
  nodes: [
    ["path", { d: "M12 2v10" }, { r: "grow", d: 0.05, o: [12, 12] }],
    ["path", { d: "m8.5 4 7 4" }, { r: "spin", d: 0.1, a: 90, o: [12, 6] }],
    ["path", { d: "m8.5 8 7-4" }, { r: "spin", d: 0.1, a: 90, o: [12, 6] }],
    ["circle", { cx: "12", cy: "17", r: "5" }, { r: "press", a: 0.06, o: [12, 17] }],
  ],
});
