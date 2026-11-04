import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "lua" (CC0-1.0). Lua is a trademark of its owner.

export const BrandLua = createIcon("BrandLua", "brand-lua", {
  nodes: [
    ["circle", { cx: "10.5", cy: "13.5", r: "8" }, { r: "press", a: 0.04, o: [10.5, 13.5] }],
    ["circle", { cx: "19.5", cy: "4.5", r: "2" }, { r: "spin", d: 0.1, a: -360, o: [10.5, 13.5] }],
    ["circle", { cx: "13.5", cy: "10.5", r: "2" }, { r: "pop", d: 0.2, o: [13.5, 10.5] }],
  ],
});
