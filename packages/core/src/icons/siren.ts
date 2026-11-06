import { icon } from "../icon.js";

export const Siren = icon("Siren", "siren", {
  nodes: [
    ["path", { d: "M7 18v-6a5 5 0 1 1 10 0v6" }, { r: "pulse", a: 0.06, o: [12, 12.5] }],
    ["path", { d: "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["path", { d: "M21 12h1" }, { r: "flicker", d: 0.21, o: [21.5, 12] }],
    ["path", { d: "M18.5 4.5 18 5" }, { r: "flicker", d: 0.13, o: [18.25, 4.75] }],
    ["path", { d: "M2 12h1" }, { r: "flicker", d: 0.17, o: [2.5, 12] }],
    ["path", { d: "M12 2v1" }, { r: "flicker", d: 0.05, o: [12, 2.5] }],
    ["path", { d: "m4.929 4.929.707.707" }, { r: "flicker", d: 0.09, o: [5.283, 5.283] }],
    ["path", { d: "M12 12v6" }, { r: "pulse", a: 0.06, o: [12, 12.5] }],
  ],
});
