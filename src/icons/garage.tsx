import { createIcon } from "../runtime/createIcon.js";

export const Garage = createIcon("Garage", "garage", {
  nodes: [
    ["path", { d: "M2 21V9l10-6 10 6v12" }, { r: "press", a: 0.04, o: [12, 21] }],
    ["path", { d: "M6 21v-9h12v9" }, { r: "fade", o: [12, 16] }],
    ["path", { d: "M6 15h12M6 18h12" }, { r: "grow", o: [12, 12] }],
  ],
});
