import { createIcon } from "../runtime/createIcon.js";

export const EyeClosed = createIcon("EyeClosed", "eye-closed", {
  nodes: [
    ["path", { d: "m15 18-.722-3.25" }, { r: "drop", d: 0.1, y: -1, a: -1.5, o: [14.639, 16.375] }],
    ["path", { d: "M2 8a10.645 10.645 0 0 0 20 0" }, { r: "press", a: 0.04, o: [12, 11.498] }],
    ["path", { d: "m20 15-1.726-2.05" }, { r: "drop", d: 0.15, y: -1, a: -1.5, o: [19.137, 13.975] }],
    ["path", { d: "m4 15 1.726-2.05" }, { r: "drop", y: -1, a: -1.5, o: [4.863, 13.975] }],
    ["path", { d: "m9 18 .722-3.25" }, { r: "drop", d: 0.05, y: -1, a: -1.5, o: [9.361, 16.375] }],
  ],
});
