import { icon } from "../icon.js";

export const CircleUser = icon("CircleUser", "circle-user", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["circle", { cx: "12", cy: "10", r: "3" }, { r: "float", a: 1.5, o: [12, 10] }],
    ["path", { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" }, { r: "rise", d: 0.1, a: 1, o: [12, 18.831] }],
  ],
});
