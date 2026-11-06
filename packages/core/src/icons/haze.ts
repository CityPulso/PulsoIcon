import { icon } from "../icon.js";

export const Haze = icon("Haze", "haze", {
  nodes: [
    ["path", { d: "m5.2 6.2 1.4 1.4" }, { r: "fade", d: 0.04, o: [12, 7.75] }],
    ["path", { d: "M2 13h2" }, { r: "fade", d: 0.12, o: [12, 7.75] }],
    ["path", { d: "M20 13h2" }, { r: "fade", d: 0.16, o: [12, 7.75] }],
    ["path", { d: "m17.4 7.6 1.4-1.4" }, { r: "fade", d: 0.08, o: [12, 7.75] }],
    ["path", { d: "M22 17H2" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [12, 17] }],
    ["path", { d: "M22 21H2" }, { r: "slide", d: 0.2, x: -1, a: 1.5, o: [12, 21] }],
    ["path", { d: "M16 13a4 4 0 0 0-8 0" }, { r: "rise", a: 1.5, o: [12, 11] }],
    ["path", { d: "M12 5V2.5" }, { r: "fade", o: [12, 7.75] }],
  ],
});
