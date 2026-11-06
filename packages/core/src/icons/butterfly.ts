import { icon } from "../icon.js";

export const Butterfly = icon("Butterfly", "butterfly", {
  svg: { r: "float", a: 1.5 },
  nodes: [
    ["path", { d: "M12 8.5v10" }],
    ["path", { d: "M12 8.5 10.5 5" }],
    ["path", { d: "M12 8.5l1.5-3.5" }],
    ["path", { d: "M11 10C9.5 6.5 6 3.5 4 4.5s-1 6 2.5 7.5C4 13 3.5 16.5 5.5 18S10 17 11 14" }, { r: "flip", o: [12, 12] }],
    ["path", { d: "M13 10c1.5-3.5 5-6.5 7-5.5s1 6-2.5 7.5c2.5 1 3 4.5 1 6S14 17 13 14" }, { r: "flip", o: [12, 12] }],
  ],
});
