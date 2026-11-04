import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "reactrouter" (CC0-1.0). React Router is a trademark of its owner.
export const BrandReactRouter = createIcon("BrandReactRouter", "brand-react-router", {
  nodes: [
    ["circle", { cx: "4", cy: "16.5", r: "1.5" }, { r: "pop", o: [4, 16.5] }],
    ["circle", { cx: "8.5", cy: "12.5", r: "1.5" }, { r: "pop", d: 0.1, o: [8.5, 12.5] }],
    ["path", { d: "M12.5 8l3.5 4.5-3.5 4.5" }, { r: "slide", x: 1, y: 0, a: 1.5, d: 0.2 }],
    ["circle", { cx: "20", cy: "16.5", r: "1.5" }, { r: "pop", d: 0.3, o: [20, 16.5] }],
  ],
});
