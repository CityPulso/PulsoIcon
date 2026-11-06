import { icon } from "../icon.js";

export const Heading3 = icon("Heading3", "heading-3", {
  text: true,
  nodes: [
    ["path", { d: "M4 12h8" }, { r: "growX", d: 0.15, o: [8, 12] }],
    ["path", { d: "M4 18V6" }, { r: "grow", o: [4, 12] }],
    ["path", { d: "M12 18V6" }, { r: "grow", d: 0.06, o: [12, 12] }],
    ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" }, { r: "stamp", d: 0.25, o: [19, 14] }],
    ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" }, { r: "stamp", d: 0.25, o: [19, 14] }],
  ],
});
