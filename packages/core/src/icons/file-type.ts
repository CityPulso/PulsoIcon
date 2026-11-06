import { icon } from "../icon.js";

export const FileType = icon("FileType", "file-type", {
  text: true,
  nodes: [
    ["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M11 18h2" }, { r: "growX", d: 0.3, o: [12, 18] }],
    ["path", { d: "M12 12v6" }, { r: "grow", d: 0.2, o: [12, 12] }],
    ["path", { d: "M9 13v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5" }, { r: "growX", d: 0.1, o: [12, 12.5] }],
  ],
});
