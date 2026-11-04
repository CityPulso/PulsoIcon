import { createIcon } from "../runtime/createIcon.js";

export const ShieldAlert = createIcon("ShieldAlert", "shield-alert", {
  nodes: [
    [
      "path",
      { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" },
      { r: "shake", a: 1, o: [12, 12.001] },
    ],
    ["path", { d: "M12 8v4" }, { r: "grow", d: 0.1, o: [12, 8] }],
    ["path", { d: "M12 16h.01" }, { r: "pop", d: 0.25, o: [12.005, 16] }],
  ],
});
