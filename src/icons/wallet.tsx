import { createIcon } from "../runtime/createIcon.js";

export const Wallet = createIcon("Wallet", "wallet", {
  nodes: [
    [
      "path",
      { d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" },
      { r: "slide", d: 0.05, y: -1, a: 1.5, o: [12.5, 9.5] },
    ],
    ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" }, { r: "press", a: 0.04, o: [12, 13] }],
  ],
});
