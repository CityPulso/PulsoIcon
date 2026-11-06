import { icon } from "../icon.js";

export const Sunrise = icon("Sunrise", "sunrise", {
  nodes: [
    ["path", { d: "M12 2v8" }, { r: "bounce", d: 0.05, y: -1, a: 2, o: [12, 6] }],
    ["path", { d: "m4.93 10.93 1.41 1.41" }, { r: "fade", d: 0.15, o: [12, 14.465] }],
    ["path", { d: "M2 18h2" }, { r: "fade", d: 0.23, o: [12, 14.465] }],
    ["path", { d: "M20 18h2" }, { r: "fade", d: 0.27, o: [12, 14.465] }],
    ["path", { d: "m19.07 10.93-1.41 1.41" }, { r: "fade", d: 0.19, o: [12, 14.465] }],
    ["path", { d: "M22 22H2" }, { r: "growX", o: [12, 22] }],
    ["path", { d: "m8 6 4-4 4 4" }, { r: "bounce", d: 0.05, y: -1, a: 2, o: [12, 6] }],
    ["path", { d: "M16 18a4 4 0 0 0-8 0" }, { r: "rise", a: 3, o: [12, 16] }],
  ],
});
