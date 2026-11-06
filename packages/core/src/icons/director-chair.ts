import { icon } from "../icon.js";

export const DirectorChair = icon("DirectorChair", "director-chair", {
  nodes: [
    ["path", { d: "M5 3v10M19 3v10" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M5 4h14M5 8h14" }, { r: "swing", a: 4, d: 0.1, o: [12, 3] }],
    ["path", { d: "M5 13h14" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "m6 13 12 8M18 13 6 21" }, { r: "fold", o: [12, 17] }],
  ],
});
