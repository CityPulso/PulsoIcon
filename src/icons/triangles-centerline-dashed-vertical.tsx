import { createIcon } from "../runtime/createIcon.js";

export const TrianglesCenterlineDashedVertical = createIcon("TrianglesCenterlineDashedVertical", "triangles-centerline-dashed-vertical", {
  nodes: [
    ["path", { d: "M12 14v2" }, { r: "fade", d: 0.08, o: [12, 12] }],
    ["path", { d: "M12 20v2" }, { r: "fade", d: 0.12, o: [12, 12] }],
    ["path", { d: "M12 2v2" }, { r: "fade", o: [12, 12] }],
    ["path", { d: "M12 8v2" }, { r: "fade", d: 0.04, o: [12, 12] }],
    ["path", { d: "M20.288 16.703A1 1 0 0022 16V8a1 1 0 00-1.712-.703l-3.99 3.991a1 1 0 00-.001 1.424z" }, { r: "slide", x: 1, a: 1.5, o: [19, 12] }],
    ["path", { d: "M3.712 16.703A1 1 0 012 16V8a1 1 0 011.712-.703l3.99 3.991a1 1 0 01.001 1.424z" }, { r: "slide", x: -1, a: 1.5, o: [5, 12] }],
  ],
});
