import { createIcon } from "../runtime/createIcon.js";

export const SeaAndSun = createIcon("SeaAndSun", "sea-and-sun", {
  nodes: [
    ["path", { d: "M7 13a5 5 0 0 1 10 0" }, { r: "rise", a: 3, o: [12, 11] }],
    ["path", { d: "M12 3v2" }, { r: "fade", d: 0.15, o: [12, 9] }],
    ["path", { d: "m5.64 6.64 1.41 1.41" }, { r: "fade", d: 0.2, o: [12, 9] }],
    ["path", { d: "m18.36 6.64-1.41 1.41" }, { r: "fade", d: 0.25, o: [12, 9] }],
    ["path", { d: "M2 13h20" }, { r: "growX", o: [12, 13] }],
    ["path", { d: "M2 17q2.5 1.5 5 0t5 0 5 0 5 0" }, { r: "slide", d: 0.1, x: 1, a: 1.5, o: [12, 17] }],
    ["path", { d: "M2 21q2.5 1.5 5 0t5 0 5 0 5 0" }, { r: "slide", d: 0.18, x: -1, a: 1.5, o: [12, 21] }],
  ],
});
