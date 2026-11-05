import { createIcon } from "../runtime/createIcon.js";

export const Heading5 = createIcon("Heading5", "heading-5", {
  text: true,
  nodes: [
    ["path", { d: "M4 12h8" }, { r: "growX", d: 0.15, o: [8, 12] }],
    ["path", { d: "M4 18V6" }, { r: "grow", o: [4, 12] }],
    ["path", { d: "M12 18V6" }, { r: "grow", d: 0.06, o: [12, 12] }],
    ["path", { d: "M17 13v-3h4" }, { r: "stamp", d: 0.25, o: [19, 14] }],
    ["path", { d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17" }, { r: "stamp", d: 0.25, o: [19, 14] }],
  ],
});
