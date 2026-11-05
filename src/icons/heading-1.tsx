import { createIcon } from "../runtime/createIcon.js";

export const Heading1 = createIcon("Heading1", "heading-1", {
  text: true,
  nodes: [
    ["path", { d: "M4 12h8" }, { r: "growX", d: 0.15, o: [8, 12] }],
    ["path", { d: "M4 18V6" }, { r: "grow", o: [4, 12] }],
    ["path", { d: "M12 18V6" }, { r: "grow", d: 0.06, o: [12, 12] }],
    ["path", { d: "m17 12 3-2v8" }, { r: "stamp", d: 0.25, o: [18.5, 14] }],
  ],
});
