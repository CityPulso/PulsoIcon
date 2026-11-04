import { createIcon } from "../runtime/createIcon.js";

export const PackageX = createIcon("PackageX", "package-x", {
  nodes: [
    ["path", { d: "M12 22V12" }, { r: "fade", o: [12, 17] }],
    ["path", { d: "m16.5 14.5 5 5" }, { r: "draw", d: 0.15, o: [19, 17] }],
    ["path", { d: "m16.5 19.5 5-5" }, { r: "draw", d: 0.25, o: [19, 17] }],
    ["path", { d: "M21 10.5V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.13-.074" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "M3.29 7 12 12l8.71-5" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "m7.5 4.27 8.997 5.148" }, { r: "shake", a: 1, o: [12, 12] }],
  ],
});
