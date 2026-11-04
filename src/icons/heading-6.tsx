import { createIcon } from "../runtime/createIcon.js";

export const Heading6 = createIcon("Heading6", "heading-6", {
  nodes: [
    ["path", { d: "M4 12h8" }, { r: "growX", d: 0.15, o: [8, 12] }],
    ["path", { d: "M4 18V6" }, { r: "grow", o: [4, 12] }],
    ["path", { d: "M12 18V6" }, { r: "grow", d: 0.06, o: [12, 12] }],
    ["circle", { cx: "19", cy: "16", r: "2" }, { r: "stamp", d: 0.25, o: [19, 14] }],
    ["path", { d: "M20 10c-2 2-3 3.5-3 6" }, { r: "stamp", d: 0.25, o: [19, 14] }],
  ],
});
