import { icon } from "../icon.js";

export const FolderKeyhole = icon("FolderKeyhole", "folder-keyhole", {
  nodes: [
    ["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["circle", { cx: "12", cy: "11.5", r: "2" }, { r: "pop", d: 0.05, o: [12, 11.5] }],
    ["path", { d: "M12 13.5V17" }, { r: "grow", d: 0.15, o: [12, 13.5] }],
  ],
});
