import { createIcon } from "../runtime/createIcon.js";

export const BrandFigma = createIcon("BrandFigma", "brand-figma", {
  nodes: [
    ["path", { d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" }, { r: "pop", o: [8.5, 5.5] }],
    ["path", { d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" }, { r: "pop", d: 0.06, o: [15.5, 5.5] }],
    ["path", { d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" }, { r: "roll", d: 0.12, x: 1, a: 1, o: [15.5, 12.5] }],
    ["path", { d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" }, { r: "pop", d: 0.18, o: [8.5, 19.5] }],
    ["path", { d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" }, { r: "pop", d: 0.24, o: [8.5, 12.5] }],
  ],
});
