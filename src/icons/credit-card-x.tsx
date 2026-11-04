import { createIcon } from "../runtime/createIcon.js";

export const CreditCardX = createIcon("CreditCardX", "credit-card-x", {
  nodes: [
    ["path", { d: "M12.5 19H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v3.5" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "M2 10h20" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "M6 14h2" }, { r: "shake", a: 1, o: [12, 12] }],
    ["path", { d: "m16.5 14.5 5 5" }, { r: "draw", d: 0.2, o: [19, 17] }],
    ["path", { d: "m21.5 14.5-5 5" }, { r: "draw", d: 0.3, o: [19, 17] }],
  ],
});
