import { icon } from "../icon.js";

export const Heading2 = icon("Heading2", "heading-2", {
  text: true,
  nodes: [
    ["path", { d: "M4 12h8" }, { r: "growX", d: 0.15, o: [8, 12] }],
    ["path", { d: "M4 18V6" }, { r: "grow", o: [4, 12] }],
    ["path", { d: "M12 18V6" }, { r: "grow", d: 0.06, o: [12, 12] }],
    ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" }, { r: "stamp", d: 0.25, o: [19, 14.129] }],
  ],
});
