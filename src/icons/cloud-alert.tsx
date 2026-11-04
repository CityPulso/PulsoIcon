import { createIcon } from "../runtime/createIcon.js";

export const CloudAlert = createIcon("CloudAlert", "cloud-alert", {
  nodes: [
    ["path", { d: "M12 12v4" }, { r: "grow", d: 0.1, o: [12, 12] }],
    ["path", { d: "M12 20h.01" }, { r: "drop", d: 0.25, a: 3, o: [12.005, 20] }],
    ["path", { d: "M8.128 16.949A7 7 0 1 1 15.71 8h1.79a1 1 0 0 1 0 9h-1.642" }, { r: "float", a: 1.5, o: [12.001, 10.002] }],
  ],
});
