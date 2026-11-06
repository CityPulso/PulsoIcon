import { icon } from "../icon.js";

export const BrandAppleWallet = icon("BrandAppleWallet", "brand-apple-wallet", {
  nodes: [
    ["rect", { x: "3", y: "4", width: "18", height: "16", rx: "3" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["path", { d: "M3 8.5h18" }, { r: "lift", d: 0.05, y: -1, a: 0, o: [12, 8.5] }],
    ["path", { d: "M3 12h18" }, { r: "lift", d: 0.12, y: -1, a: 0, o: [12, 12] }],
    ["path", { d: "M3 15h4.5c.6 1.5 2.2 2.5 4.5 2.5s3.9-1 4.5-2.5H21" }, { r: "press", a: 0.04, o: [12, 20] }],
  ],
});
