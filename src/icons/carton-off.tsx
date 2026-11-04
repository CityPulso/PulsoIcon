import { createIcon } from "../runtime/createIcon.js";

export const CartonOff = createIcon("CartonOff", "carton-off", {
  nodes: [
    ["path", { d: "M10 10H5v10a2 2 0 002 2h10a2 2 0 002-2v-1" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M13 22v-9" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M13.902 8.245 16 6h-4.343" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "M19 13.343V10a2 2 0 00-.539-1.367L16 6V3a1 1 0 00-1-1H9a1 1 0 00-.857.486" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }],
    ["path", { d: "M7.034 7.034 5.539 8.633A2 2 0 005 10" }, { r: "press", a: 0.05, o: [12, 12] }],
  ],
});
