import { createIcon } from "../runtime/createIcon.js";

export const WalletCards = createIcon("WalletCards", "wallet-cards", {
  nodes: [
    ["path", { d: "M3 11h3.75a2 2 0 0 1 1.6.8l.45.6a4 4 0 0 0 6.4 0l.45-.6a2 2 0 0 1 1.6-.8H21" }, { r: "slide", d: 0.13, y: -1, a: 1.5, o: [12, 10.5] }],
    ["path", { d: "M3 7h18" }, { r: "slide", d: 0.05, y: -1, a: 1.5, o: [12, 10.5] }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, { r: "press", a: 0.04, o: [12, 21] }],
  ],
});
