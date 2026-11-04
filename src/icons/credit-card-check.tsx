import { createIcon } from "../runtime/createIcon.js";

export const CreditCardCheck = createIcon("CreditCardCheck", "credit-card-check", {
  nodes: [
    ["path", { d: "M12.5 19H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v4" }, { r: "slide", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M2 10h20" }, { r: "slide", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M6 14h2" }, { r: "slide", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "m16 17 2 2 4-4" }, { r: "draw", d: 0.2, o: [19, 17] }],
  ],
});
