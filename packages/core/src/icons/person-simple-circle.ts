import { icon } from "../icon.js";

// Drawn after Phosphor Icons "person-simple-circle" (MIT, Copyright (c) 2023 Phosphor Icons).

export const PersonSimpleCircle = icon("PersonSimpleCircle", "person-simple-circle", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["circle", { cx: "12", cy: "7", r: "1" }, { r: "float", a: 1, o: [12, 7] }],
    ["path", { d: "m7 10 5 1.5 5-1.5" }, { r: "swing", d: 0.05, a: 10, o: [12, 11.5] }],
    ["path", { d: "M12 11.5v3" }, { r: "float", d: 0.05, a: 0.6, o: [12, 13] }],
    ["path", { d: "m9 18.5 3-4 3 4" }, { r: "press", d: 0.1, a: 0.06, o: [12, 18.5] }],
  ],
});
