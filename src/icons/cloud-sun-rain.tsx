import { createIcon } from "../runtime/createIcon.js";

export const CloudSunRain = createIcon("CloudSunRain", "cloud-sun-rain", {
  nodes: [
    ["path", { d: "M12 2v2" }, { r: "spin", a: 45, o: [12, 9] }],
    ["path", { d: "m4.93 4.93 1.41 1.41" }, { r: "spin", a: 45, o: [12, 9] }],
    ["path", { d: "M20 12h2" }, { r: "spin", a: 45, o: [12, 9] }],
    ["path", { d: "m19.07 4.93-1.41 1.41" }, { r: "spin", a: 45, o: [12, 9] }],
    ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128" }, { r: "rise", a: 1, o: [13.011, 10.324] }],
    ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" }, { r: "float", d: 0.1, a: 1, o: [9.003, 16.621] }],
    ["path", { d: "M11 20v2" }, { r: "drop", d: 0.3, a: -3, o: [9, 20.5] }],
    ["path", { d: "M7 19v2" }, { r: "drop", d: 0.2, a: -3, o: [9, 20.5] }],
  ],
});
