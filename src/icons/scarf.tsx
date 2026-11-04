import { createIcon } from "../runtime/createIcon.js";

export const Scarf = createIcon("Scarf", "scarf", {
  nodes: [
    ["path", { d: "M5 6.5C5 4 8 2 12 2s7 2 7 4.5S16 11 12 11 5 9 5 6.5z" }, { r: "press", a: 0.05, o: [12, 6.5] }],
    ["path", { d: "M8 6.5c1 .9 2.4 1.5 4 1.5s3-.6 4-1.5" }, { r: "press", a: 0.05, o: [12, 6.5] }],
    ["path", { d: "M13 11l-1.5 9h5l.5-10" }, { r: "swing", d: 0.1, a: 8, o: [14.5, 10] }],
    ["path", { d: "M12.5 20v2" }, { r: "swing", d: 0.1, a: 8, o: [14.5, 10] }],
    ["path", { d: "M15.5 20v2" }, { r: "swing", d: 0.1, a: 8, o: [14.5, 10] }],
  ],
});
