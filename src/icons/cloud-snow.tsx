import { createIcon } from "../runtime/createIcon.js";

export const CloudSnow = createIcon("CloudSnow", "cloud-snow", {
  nodes: [
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }, { r: "float", a: 1, o: [12.002, 9.622] }],
    ["path", { d: "M8 15h.01" }, { r: "drop", a: -3, o: [12.005, 15] }],
    ["path", { d: "M8 19h.01" }, { r: "drop", d: 0.2, a: -3, o: [12.005, 19] }],
    ["path", { d: "M12 17h.01" }, { r: "drop", d: 0.12, a: -3, o: [12.005, 17] }],
    ["path", { d: "M12 21h.01" }, { r: "drop", d: 0.3, a: -3, o: [12.005, 21] }],
    ["path", { d: "M16 15h.01" }, { r: "drop", d: 0.08, a: -3, o: [12.005, 15] }],
    ["path", { d: "M16 19h.01" }, { r: "drop", d: 0.28, a: -3, o: [12.005, 19] }],
  ],
});
