import { createIcon } from "../runtime/createIcon.js";

export const WalletMinimal = createIcon("WalletMinimal", "wallet-minimal", {
  nodes: [
    ["path", { d: "M17 14h.01" }, { r: "pop", d: 0.1, o: [17.005, 14] }],
    ["path", { d: "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" }, { r: "jelly", a: 0.06, o: [12, 12] }],
  ],
});
