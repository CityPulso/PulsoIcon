import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "gogdotcom" (CC0-1.0). GOG.com is a trademark of its owner.
export const BrandGogCom = createIcon("BrandGogCom", "brand-gog-com", {
  nodes: [
    ["circle", { cx: "4.8", cy: "10.5", r: "2.3" }, { r: "draw", o: [4.8, 10.5] }],
    ["path", { d: "M7.1 9v6a2.5 2.5 0 0 1-2.5 2.5H3.5" }, { r: "draw", d: 0.08, o: [5, 14] }],
    ["circle", { cx: "12", cy: "10.5", r: "2.3" }, { r: "roll", d: 0.16, x: 1, a: 0.5, o: [12, 10.5] }],
    ["circle", { cx: "19.2", cy: "10.5", r: "2.3" }, { r: "draw", d: 0.24, o: [19.2, 10.5] }],
    ["path", { d: "M21.5 9v6a2.5 2.5 0 0 1-2.5 2.5h-1.1" }, { r: "draw", d: 0.32, o: [19.5, 14] }],
  ],
});
