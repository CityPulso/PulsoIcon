import { icon } from "../icon.js";

export const Warehouse = icon("Warehouse", "warehouse", {
  nodes: [
    ["path", { d: "M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11" }, { r: "lift", d: 0.05, o: [12, 15] }],
    ["path", { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M6 13h12" }, { r: "growX", d: 0.1, o: [12, 13] }],
    ["path", { d: "M6 17h12" }, { r: "growX", d: 0.16, o: [12, 17] }],
  ],
});
