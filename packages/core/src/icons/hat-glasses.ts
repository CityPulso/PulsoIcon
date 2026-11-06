import { icon } from "../icon.js";

export const HatGlasses = icon("HatGlasses", "hat-glasses", {
  nodes: [
    ["path", { d: "M14 18a2 2 0 0 0-4 0" }, { r: "fade", d: 0.05, o: [12, 17] }],
    ["path", { d: "m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11" }, { r: "float", a: 2, o: [12, 7] }],
    ["path", { d: "M2 11h20" }, { r: "float", a: 2, o: [12, 7] }],
    ["circle", { cx: "17", cy: "18", r: "3" }, { r: "bounce", d: 0.05, y: -1, a: 1, o: [12, 18] }],
    ["circle", { cx: "7", cy: "18", r: "3" }, { r: "bounce", d: 0.05, y: -1, a: 1, o: [12, 18] }],
  ],
});
