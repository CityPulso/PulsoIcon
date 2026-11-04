import { createIcon } from "../runtime/createIcon.js";

export const CreditCardReader = createIcon("CreditCardReader", "credit-card-reader", {
  nodes: [
    ["path", { d: "M15 16v1" }, { r: "flicker", d: 0.25, o: [15, 16.5] }],
    ["path", { d: "M16.963 7.734A1 1 0 0015.999 7H8.003a1 1 0 00-.964.734L4.073 18.467A2 2 0 006 21h12a2 2 0 001.927-2.532z" }, { r: "press", d: 0.1, a: 0.04, o: [12, 14] }],
    ["path", { d: "M2.678 8.5A2 2 0 012 7V5a2 2 0 012-2h16a2 2 0 012 2v2a2 2 0 01-.676 1.499" }, { r: "slide", y: -1, a: 2, o: [12, 5.75] }],
    ["path", { d: "m9 21 2-14" }, { r: "press", d: 0.1, a: 0.04, o: [12, 14] }],
  ],
});
