import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "linuxmint" (CC0-1.0). Linux Mint is a trademark of its owner.

export const BrandLinuxMint = createIcon("BrandLinuxMint", "brand-linux-mint", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M6.5 7.5V14a2.5 2.5 0 0 0 2.5 2.5h6a2.5 2.5 0 0 0 2.5-2.5v-3.5a2 2 0 0 0-4 0v3" }, { r: "draw", d: 0.05 }],
    ["path", { d: "M9.5 13.5v-3a2 2 0 0 1 4 0" }, { r: "draw", d: 0.25 }],
  ],
});
