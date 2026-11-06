import { icon } from "../icon.js";

export const FileArchive = icon("FileArchive", "file-archive", {
  nodes: [
    ["path", { d: "M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M8 12v-1" }, { r: "slide", d: 0.05, y: 1, a: 1, o: [8, 11.5] }],
    ["path", { d: "M8 18v-2" }, { r: "slide", d: 0.1, y: 1, a: 1, o: [8, 17] }],
    ["path", { d: "M8 7V6" }, { r: "slide", y: 1, a: 1, o: [8, 6.5] }],
    ["circle", { cx: "8", cy: "20", r: "2" }, { r: "pop", d: 0.2, o: [8, 20] }],
  ],
});
