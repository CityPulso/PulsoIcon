import { icon } from "../icon.js";

export const MoneyBag = icon("MoneyBag", "money-bag", {
  nodes: [
    ["path", { d: "M9.5 6 8 3h8l-1.5 3" }, { r: "wobble", a: 6, o: [12, 21] }],
    ["path", { d: "M9.5 6h5" }, { r: "wobble", a: 6, o: [12, 21] }],
    ["path", { d: "M9.5 6C6 8 4 12 4 15.5 4 19 6 21 9 21h6c3 0 5-2 5-5.5 0-3.5-2-7.5-5.5-9.5" }, { r: "wobble", a: 6, o: [12, 21] }],
    ["path", { d: "M12 10.5v8" }, { r: "grow", d: 0.1, o: [12, 14.5] }],
    ["path", { d: "M14 11.5h-2.75a1.25 1.25 0 0 0 0 2.5h1.5a1.25 1.25 0 0 1 0 2.5H10" }, { r: "redraw", d: 0.1, o: [12, 14] }],
  ],
});
