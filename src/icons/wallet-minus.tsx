import { createIcon } from "../runtime/createIcon.js";

export const WalletMinus = createIcon("WalletMinus", "wallet-minus", {
  nodes: [
    ["path", { d: "M17 11.5h.01" }, { r: "pop", d: 0.1, o: [17.005, 11.5] }],
    ["path", { d: "M7 7h12a2 2 0 0 1 2 2v4" }, { r: "jelly", a: 0.06, o: [12, 12] }],
    ["path", { d: "M13 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" }, { r: "jelly", a: 0.06, o: [12, 12] }],
    ["path", { d: "M16 18h6" }, { r: "growX", d: 0.15, o: [19, 18] }],
  ],
});
