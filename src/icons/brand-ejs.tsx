import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "ejs" (CC0-1.0). EJS is a trademark of its owner.
export const BrandEjs = createIcon("BrandEjs", "brand-ejs", {
  nodes: [
    ["path", { d: "M4 13.5h5a2.5 2.5 0 1 0-.73 1.77" }, { r: "draw" }],
    ["path", { d: "M12.5 11v6a2 2 0 0 1-2 2" }, { r: "draw", d: 0.12 }],
    ["path", { d: "M12.5 7.5h.01" }, { r: "pop", d: 0.2, o: [12.5, 7.5] }],
    ["path", { d: "M20 11h-2.75a1.25 1.25 0 0 0 0 2.5h1.5a1.25 1.25 0 0 1 0 2.5H15.5" }, { r: "draw", d: 0.24 }],
  ],
});
