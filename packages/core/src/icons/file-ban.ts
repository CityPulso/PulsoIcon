import { icon } from "../icon.js";

export const FileBan = icon("FileBan", "file-ban", {
  nodes: [
    ["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["circle", { cx: "12", cy: "15", r: "3.5" }, { r: "pop", d: 0.05, o: [12, 15] }],
    ["path", { d: "m9.5 12.5 5 5" }, { r: "draw", d: 0.25, o: [12, 15] }],
  ],
});
