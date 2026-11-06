import { icon } from "../icon.js";

export const CloudSun = icon("CloudSun", "cloud-sun", {
  nodes: [
    ["path", { d: "M12 2v2" }, { r: "spin", a: 45, o: [12, 9] }],
    ["path", { d: "m4.93 4.93 1.41 1.41" }, { r: "spin", a: 45, o: [12, 9] }],
    ["path", { d: "M20 12h2" }, { r: "spin", a: 45, o: [12, 9] }],
    ["path", { d: "m19.07 4.93-1.41 1.41" }, { r: "spin", a: 45, o: [12, 9] }],
    ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128" }, { r: "rise", d: 0.05, a: 1.5, o: [13.011, 10.324] }],
    ["path", { d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" }, { r: "float", d: 0.1, a: 1.5, o: [9, 17] }],
  ],
});
