import { icon } from "../icon.js";

// Adapted from Iconoir "card-wallet" (MIT, Copyright (c) 2021 Luca Burgio).
export const CardWallet = icon("CardWallet", "card-wallet", {
  nodes: [
    ["path", { d: "M19 20H5C3.89543 20 3 19.1046 3 18V9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V18C21 19.1046 20.1046 20 19 20Z" }],
    ["path", { d: "M7 7V3.6C7 3.26863 7.26863 3 7.6 3H16.4C16.7314 3 17 3.26863 17 3.6V7" }, { r: "lift", x: 0, y: -1, a: 0 }],
    ["path", { d: "M10 3V7" }, { r: "lift", x: 0, y: -1, a: 0 }],
    ["path", { d: "M12 3V7" }, { r: "lift", x: 0, y: -1, a: 0 }],
    ["path", { d: "M16.5 13.5h.01" }, { r: "pop", d: 0.2, o: [16.5, 13.5] }],
  ],
});
