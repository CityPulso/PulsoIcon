import { icon } from "../icon.js";

export const Fox = icon("Fox", "fox", {
  nodes: [
    ["path", { d: "M3 3l6 5h6l6-5-.5 9L12 21l-8.5-9Z" }, { r: "wobble", a: 6, o: [12, 20] }],
    ["path", { d: "M3.5 12 8 13l4 4 4-4 4.5-1" }, { r: "wobble", a: 6, o: [12, 20] }],
    ["path", { d: "M9 10.5h.01" }, { r: "blink", d: 0.15, o: [12, 10.5] }],
    ["path", { d: "M15 10.5h.01" }, { r: "blink", d: 0.15, o: [12, 10.5] }],
  ],
});
