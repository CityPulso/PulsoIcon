import { icon } from "../icon.js";

export const FileTypeHwp = icon("FileTypeHwp", "file-type-hwp", {
  text: true,
  nodes: [
    ["path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }],
    ["path", { d: "M5 12v-7a2 2 0 0 1 2-2h7l5 5v4" }],
    ["path", { d: "M3 15v6M6 15v6M3 18h3" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M8 15l1.5 6 1.5-4 1.5 4 1.5-6" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M16 21v-6h1.5a1.5 1.5 0 0 1 0 3H16" }, { r: "draw", d: 0.35 }],
  ],
});
