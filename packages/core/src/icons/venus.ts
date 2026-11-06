import { icon } from "../icon.js";

export const Venus = icon("Venus", "venus", {
  nodes: [
    ["path", { d: "M12 15v7" }, { r: "sway", d: 0.05, a: 10, o: [12, 15] }],
    ["path", { d: "M9 19h6" }, { r: "sway", d: 0.05, a: 10, o: [12, 15] }],
    ["circle", { cx: "12", cy: "9", r: "6" }, { r: "swing", a: 10, o: [12, 15] }],
  ],
});
