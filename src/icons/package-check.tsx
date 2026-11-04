import { createIcon } from "../runtime/createIcon.js";

export const PackageCheck = createIcon("PackageCheck", "package-check", {
  nodes: [
    ["path", { d: "M12 22V12" }, { r: "fade", o: [12, 17] }],
    ["path", { d: "m16 17 2 2 4-4" }, { r: "draw", d: 0.15, o: [19, 17] }],
    ["path", { d: "M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M3.29 7 12 12l8.71-5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "m7.5 4.27 8.997 5.148" }, { r: "press", a: 0.04, o: [12, 22] }],
  ],
});
