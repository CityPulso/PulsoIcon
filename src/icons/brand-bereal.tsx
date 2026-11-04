import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "bereal" (CC0-1.0). BeReal is a trademark of its owner.
export const BrandBereal = createIcon("BrandBereal", "brand-bereal", {
  nodes: [
    ["path", { d: "M3.5 7v10h3.5a2.5 2.5 0 0 0 0-5H3.5h3a2.5 2.5 0 0 0 0-5z" }, { r: "draw" }],
    ["path", { d: "M12 13.5h6a3 3 0 1 0-.9 2.1" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M21 17h.01" }, { r: "pop", d: 0.3, o: [21, 17] }],
  ],
});
