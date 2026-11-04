import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "keepassxc" (CC0-1.0). KeePassXC is a trademark of its owner.
export const BrandKeepassxc = createIcon("BrandKeepassxc", "brand-keepassxc", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["circle", { cx: "12", cy: "8", r: "2.5" }, { r: "turn", a: 20, o: [12, 12] }],
    ["path", { d: "M12 10.5v8" }, { r: "turn", a: 20, o: [12, 12] }],
    ["path", { d: "M12 14h2M12 17h2" }, { r: "turn", a: 20, o: [12, 12] }],
  ],
});
