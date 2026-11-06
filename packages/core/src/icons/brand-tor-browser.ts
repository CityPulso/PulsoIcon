import { icon } from "../icon.js";

// Drawn after Simple Icons "torbrowser" (CC0-1.0). Tor Browser is a trademark of its owner.

export const BrandTorBrowser = icon("BrandTorBrowser", "brand-tor-browser", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 2v20" }],
    ["path", { d: "M12 5.5a6.5 6.5 0 0 1 0 13" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M12 9a3 3 0 0 1 0 6" }, { r: "draw" }],
  ],
});
