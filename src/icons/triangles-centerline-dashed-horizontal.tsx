import { createIcon } from "../runtime/createIcon.js";

export const TrianglesCenterlineDashedHorizontal = createIcon("TrianglesCenterlineDashedHorizontal", "triangles-centerline-dashed-horizontal", {
  nodes: [
    ["path", { d: "M10 12H8" }, { r: "fade", d: 0.04, o: [12, 12] }],
    ["path", { d: "M16 12h-2" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M22 12h-2" }, { r: "fade", d: 0.12, o: [12, 12] }],
    ["path", { d: "M4 12H2" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M7.298 20.288A1 1 0 008 22h8a1 1 0 00.703-1.712l-3.991-3.99a1 1 0 00-1.424-.001z" }, { r: "slide", y: 1, a: 1.5, o: [12.001, 19] }],
    ["path", { d: "M7.298 3.712A1 1 0 018 2h8a1 1 0 01.703 1.712l-3.991 3.99a1 1 0 01-1.424.001z" }, { r: "slide", y: -1, a: 1.5, o: [12.001, 5] }],
  ],
});
