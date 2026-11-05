import { createIcon } from "../runtime/createIcon.js";

export const CircleLetterI = createIcon("CircleLetterI", "circle-letter-i", {
  text: true,
  nodes: [
    ["path", { d: "M12 16V8" }, { r: "grow", d: 0.1, o: [12, 12] }],
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "spin", a: 90, o: [12, 12] }],
  ],
});
