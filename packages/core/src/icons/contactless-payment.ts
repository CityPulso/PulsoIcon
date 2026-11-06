import { icon } from "../icon.js";

// Drawn after Phosphor Icons "contactless-payment" (MIT, Copyright (c) 2023 Phosphor Icons).
export const ContactlessPayment = icon("ContactlessPayment", "contactless-payment", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M8.5 9.5a5 5 0 0 1 0 5" }, { r: "draw", o: [9, 12] }],
    ["path", { d: "M11.5 8a8 8 0 0 1 0 8" }, { r: "draw", d: 0.08, o: [12, 12] }],
    ["path", { d: "M14.5 6.5a11 11 0 0 1 0 11" }, { r: "draw", d: 0.16, o: [15, 12] }],
  ],
});
