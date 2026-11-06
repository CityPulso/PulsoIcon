import { icon } from "../icon.js";

export const FileOutput = icon("FileOutput", "file-output", {
  nodes: [
    [
      "path",
      { d: "M4.226 20.925A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.127" },
      { r: "press", a: 0.04, o: [12, 22] },
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "m5 11-3 3" }, { r: "bounce", d: 0.1, x: -1, a: 2, o: [7, 14] }],
    ["path", { d: "m5 17-3-3h10" }, { r: "bounce", d: 0.1, x: -1, a: 2, o: [7, 14] }],
  ],
});
