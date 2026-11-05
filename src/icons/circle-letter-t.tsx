import { createIcon } from "../runtime/createIcon.js";

export const CircleLetterT = createIcon("CircleLetterT", "circle-letter-t", {
  text: true,
  nodes: [
    ["path", { d: "M12 16V8" }, { r: "grow", d: 0.2, o: [12, 8] }],
    ["path", { d: "M9 8h6" }, { r: "growX", d: 0.1, o: [12, 8] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
