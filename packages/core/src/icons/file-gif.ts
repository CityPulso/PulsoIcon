import { icon } from "../icon.js";

export const FileGif = icon("FileGif", "file-gif", {
  text: true,
  nodes: [
    ["path", { d: "M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "fold", o: [17, 5] }],
    ["path", { d: "M9.25 15H6.75a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5H9.25V18H7.75" }, { r: "draw", d: 0.1, o: [7.25, 18] }],
    ["path", { d: "M12.25 15v6" }, { r: "draw", d: 0.17, o: [12.25, 18] }],
    ["path", { d: "M18.75 15H15.25v6" }, { r: "draw", d: 0.24, o: [17, 18] }],
    ["path", { d: "M15.25 18h2.5" }, { r: "draw", d: 0.24, o: [17, 18] }],
  ],
});
