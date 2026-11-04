import { createIcon } from "../runtime/createIcon.js";

export const Can = createIcon("Can", "can", {
  nodes: [
    ["path", { d: "M21 10.5a9 2.5 0 01-18 0v8a9 2.5 0 0018 0z" }, { r: "jelly", a: 0.08, o: [12, 15.75] }],
    ["path", { d: "M21 10.5A9 2.5 25.32 004.59 3.47 9 2.5 25.32 0021 10.5" }, { r: "lift", d: 0.1, x: 0.3, a: 8, o: [21, 8] }],
    ["path", { d: "M3 10.5a9 2.5 0 016.527-2.405" }, { r: "fade", d: 0.2, o: [9, 12.549] }],
    ["path", { d: "M9 16.858a31 31 0 006 0" }, { r: "fade", d: 0.2, o: [9, 12.549] }],
  ],
});
