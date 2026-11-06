import { icon } from "../icon.js";

// Drawn after Simple Icons "portainer" (CC0-1.0). Portainer is a trademark of its owner.

export const BrandPortainer = icon("BrandPortainer", "brand-portainer", {
  nodes: [
    ["path", { d: "M13 3v10M4 5.5h16M13 3l-5 2.5M13 3l5 2.5" }],
    ["path", { d: "M6 5.5v2.5" }, { r: "swing", a: 10, o: [6, 5.5] }],
    ["rect", { x: "4", y: "8", width: "4", height: "3", rx: "0.5" }, { r: "swing", a: 10, o: [6, 5.5] }],
    ["rect", { x: "9", y: "15", width: "11", height: "6", rx: "1" }, { r: "press", d: 0.1, a: 0.05, o: [14.5, 21] }],
    ["path", { d: "M14.5 15v6" }],
  ],
});
