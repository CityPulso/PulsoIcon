import { createIcon } from "../runtime/createIcon.js";

export const OrangeSlice = createIcon("OrangeSlice", "orange-slice", {
  nodes: [
    ["path", { d: "M2 8h20a10 10 0 0 1-20 0z" }, { r: "swing", a: 8, o: [12, 8] }],
    ["path", { d: "M5 8a7 7 0 0 0 14 0" }, { r: "swing", a: 8, o: [12, 8] }],
    ["path", { d: "M12 8v7" }, { r: "fade", d: 0.1, o: [12, 11] }],
    ["path", { d: "m12 8-5 5" }, { r: "fade", d: 0.16, o: [12, 11] }],
    ["path", { d: "m12 8 5 5" }, { r: "fade", d: 0.22, o: [12, 11] }],
  ],
});
