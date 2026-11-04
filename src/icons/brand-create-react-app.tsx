import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "createreactapp" (CC0-1.0). Create React App is a trademark of its owner.
export const BrandCreateReactApp = createIcon("BrandCreateReactApp", "brand-create-react-app", {
  nodes: [
    ["path", { d: "M6 2h16v16" }],
    ["rect", { x: "2", y: "6", width: "16", height: "16", rx: "1" }],
    ["path", { d: "M4 14A6 2.5 0 1 0 16 14A6 2.5 0 1 0 4 14" }, { r: "spin", a: 180, o: [10, 14] }],
    ["path", { d: "M7 8.8A6 2.5 60 1 0 13 19.2A6 2.5 60 1 0 7 8.8" }, { r: "spin", a: 180, o: [10, 14] }],
    ["path", { d: "M7 19.2A6 2.5 -60 1 0 13 8.8A6 2.5 -60 1 0 7 19.2" }, { r: "spin", a: 180, o: [10, 14] }],
    ["path", { d: "M10 14h.01" }, { r: "beat", a: 0.4, o: [10, 14] }],
  ],
});
