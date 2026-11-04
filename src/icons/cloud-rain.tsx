import { createIcon } from "../runtime/createIcon.js";

export const CloudRain = createIcon("CloudRain", "cloud-rain", {
  nodes: [
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }, { r: "float", a: 1, o: [12.002, 9.622] }],
    ["path", { d: "M16 14v6" }, { r: "drop", d: 0.2, a: -3, o: [16, 17] }],
    ["path", { d: "M8 14v6" }, { r: "drop", a: -3, o: [8, 17] }],
    ["path", { d: "M12 16v6" }, { r: "drop", d: 0.1, a: -3, o: [12, 19] }],
  ],
});
