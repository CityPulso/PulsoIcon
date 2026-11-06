import { icon } from "../icon.js";

// Drawn after Simple Icons "webauthn" (CC0-1.0). WebAuthn is a trademark of its owner.
export const BrandWebauthn = icon("BrandWebauthn", "brand-webauthn", {
  nodes: [
    ["circle", { cx: "16", cy: "12", r: "6" }],
    ["path", { d: "M16 6c-1.6 1.6-2.5 3.7-2.5 6s.9 4.4 2.5 6c1.6-1.6 2.5-3.7 2.5-6S17.6 7.6 16 6" }, { r: "flip", o: [16, 12] }],
    ["circle", { cx: "4", cy: "12", r: "2" }, { r: "slide", x: 1, o: [7, 12] }],
    ["path", { d: "M6 12h7M9 12v2" }, { r: "slide", x: 1, o: [7, 12] }],
  ],
});
