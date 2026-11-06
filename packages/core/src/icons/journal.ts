import { icon } from "../icon.js";

// Adapted from Iconoir "journal" (MIT, Copyright (c) 2021 Luca Burgio).
export const Journal = icon("Journal", "journal", {
  nodes: [
    ["path", { d: "M6 6L18 6" }, { r: "growX", o: [6, 6] }],
    ["path", { d: "M6 10H18" }, { r: "growX", d: 0.08, o: [6, 10] }],
    ["path", { d: "M13 14L18 14" }, { r: "growX", d: 0.16, o: [13, 14] }],
    ["path", { d: "M13 18L18 18" }, { r: "growX", d: 0.24, o: [13, 18] }],
    ["path", { d: "M2 21.4V2.6C2 2.26863 2.26863 2 2.6 2H21.4C21.7314 2 22 2.26863 22 2.6V21.4C22 21.7314 21.7314 22 21.4 22H2.6C2.26863 22 2 21.7314 2 21.4Z" }],
    ["path", { d: "M6 18V14H9V18H6Z" }, { r: "pop", d: 0.2, o: [7.5, 16] }],
  ],
});
