import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "grapheneos" (CC0-1.0). GrapheneOS is a trademark of its owner.

export const BrandGrapheneos = createIcon("BrandGrapheneos", "brand-grapheneos", {
  nodes: [
    ["path", { d: "M13.3 6.75L15.9 8.25M17.2 10.5L17.2 13.5M15.9 15.75L13.3 17.25M10.7 17.25L8.1 15.75M6.8 13.5L6.8 10.5M8.1 8.25L10.7 6.75" }],
    ["path", { d: "M12 4.5L12 2M18.5 8.25L20.66 7M18.5 15.75L20.66 17M12 19.5L12 22M5.5 15.75L3.34 17M5.5 8.25L3.34 7" }, { r: "draw", d: 0.3 }],
    ["circle", { cx: "12", cy: "6", r: "1.5" }, { r: "pop", d: 0, o: [12, 6] }],
    ["circle", { cx: "17.2", cy: "9", r: "1.5" }, { r: "pop", d: 0.06, o: [17.2, 9] }],
    ["circle", { cx: "17.2", cy: "15", r: "1.5" }, { r: "pop", d: 0.12, o: [17.2, 15] }],
    ["circle", { cx: "12", cy: "18", r: "1.5" }, { r: "pop", d: 0.18, o: [12, 18] }],
    ["circle", { cx: "6.8", cy: "15", r: "1.5" }, { r: "pop", d: 0.24, o: [6.8, 15] }],
    ["circle", { cx: "6.8", cy: "9", r: "1.5" }, { r: "pop", d: 0.3, o: [6.8, 9] }],
  ],
});
