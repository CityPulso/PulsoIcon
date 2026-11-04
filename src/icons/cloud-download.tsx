import { createIcon } from "../runtime/createIcon.js";

export const CloudDownload = createIcon("CloudDownload", "cloud-download", {
  nodes: [
    ["path", { d: "M12 13v8l-4-4" }, { r: "bounce", d: 0.05, y: 1, a: 2, o: [12, 17] }],
    ["path", { d: "m12 21 4-4" }, { r: "bounce", d: 0.05, y: 1, a: 2, o: [12, 17] }],
    ["path", { d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" }, { r: "float", a: 1, o: [12.001, 9.642] }],
  ],
});
