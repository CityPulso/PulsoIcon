import { icon } from "../icon.js";

export const FileCurrencyEuro = icon("FileCurrencyEuro", "file-currency-euro", {
  text: true,
  nodes: [
    ["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M15 12a3.5 3.5 0 1 0 0 5" }, { r: "redraw", d: 0.05, o: [12.5, 14.5] }],
    ["path", { d: "M8.5 13.5h4" }, { r: "growX", d: 0.2, o: [8.5, 13.5] }],
    ["path", { d: "M8.5 15.5h4" }, { r: "growX", d: 0.26, o: [8.5, 15.5] }],
  ],
});
