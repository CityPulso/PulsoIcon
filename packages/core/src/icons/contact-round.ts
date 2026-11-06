import { icon } from "../icon.js";

export const ContactRound = icon("ContactRound", "contact-round", {
  nodes: [
    ["path", { d: "M16 2v2" }, { r: "lift", o: [12, 3] }],
    ["path", { d: "M17.915 21a6 6 0 10-12 0" }, { r: "rise", d: 0.15, a: 1, o: [11.915, 18] }],
    ["path", { d: "M8 2v2" }, { r: "lift", d: 0.06, o: [12, 3] }],
    ["circle", { cx: "12", cy: "11", r: "4" }, { r: "float", d: 0.1, a: 1.5, o: [12, 11] }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 12] }],
  ],
});
