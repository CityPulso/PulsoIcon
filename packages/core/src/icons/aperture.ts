import { icon } from "../icon.js";

export const Aperture = icon("Aperture", "aperture", {
  svg: { r: "spin", a: 120 },
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "m14.31 8 5.74 9.94" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M9.69 8h11.48" }, { r: "fade", d: 0.04, o: [12, 12] }],
    ["path", { d: "m7.38 12 5.74-9.94" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M9.69 16 3.95 6.06" }, { r: "fade", d: 0.12, o: [12, 12] }],
    ["path", { d: "M14.31 16H2.83" }, { r: "fade", d: 0.16, o: [12, 12] }],
    ["path", { d: "m16.62 12-5.74 9.94" }, { r: "fade", d: 0.2, o: [12, 12] }],
  ],
});
