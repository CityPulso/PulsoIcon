import { icon } from "../icon.js";

export const BrandReddit = icon("BrandReddit", "brand-reddit", {
  nodes: [
    ["ellipse", { cx: "12", cy: "14.5", rx: "8", ry: "5.5" }, { r: "wobble", a: 4, o: [12, 15] }],
    ["circle", { cx: "4.5", cy: "10.5", r: "1.5" }, { r: "wobble", a: 4, o: [12, 15] }],
    ["circle", { cx: "19.5", cy: "10.5", r: "1.5" }, { r: "wobble", a: 4, o: [12, 15] }],
    ["path", { d: "M12 9l1.2-5 3.8 1" }, { r: "swing", d: 0.05, a: 15, o: [12, 9] }],
    ["circle", { cx: "18.5", cy: "5", r: "1.5" }, { r: "swing", d: 0.05, a: 15, o: [12, 9] }],
    ["path", { d: "M9 13.5h.01M15 13.5h.01" }, { r: "blink", d: 0.15, o: [12, 13.5] }],
    ["path", { d: "M9.5 17c1.5.8 3.5.8 5 0" }, { r: "draw", d: 0.2, o: [12, 17] }],
  ],
});
