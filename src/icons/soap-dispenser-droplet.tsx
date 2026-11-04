import { createIcon } from "../runtime/createIcon.js";

export const SoapDispenserDroplet = createIcon("SoapDispenserDroplet", "soap-dispenser-droplet", {
  nodes: [
    ["path", { d: "M10.5 2v4" }, { r: "press", a: 0.2, o: [10, 2] }],
    ["path", { d: "M14 2H7a2 2 0 0 0-2 2" }, { r: "press", a: 0.2, o: [10, 2] }],
    [
      "path",
      { d: "M19.29 14.76A6.67 6.67 0 0 1 17 11a6.6 6.6 0 0 1-2.29 3.76c-1.15.92-1.71 2.04-1.71 3.19 0 2.22 1.8 4.05 4 4.05s4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19" },
      { r: "drop", d: 0.15, a: 3, o: [17, 16.5] },
    ],
    ["path", { d: "M9.607 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" }, { r: "press", d: 0.05, a: 0.04, o: [8.5, 13.5] }],
  ],
});
